"""Monthly SEO + GEO audit for avonstowe.com.  Usage: python3 geo_audit.py [base_url] [--psi]
Scores the automatic categories 0-5 from evidence it can fetch; manual categories
(AI answer visibility, entity & mentions, indexing) are recorded separately each month."""
import sys, json, re, urllib.request, datetime
BASE = (sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "https://www.avonstowe.com").rstrip("/")
UA = {"User-Agent": "Mozilla/5.0 (compatible; AvonstoweAudit/1.0)"}
AI_AGENTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot"]
def get(path):
    try:
        with urllib.request.urlopen(urllib.request.Request(BASE + path, headers=UA), timeout=20) as r: return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e: return e.code, ""
    except Exception as e: return 0, str(e)
R = {"date": datetime.date.today().isoformat(), "url": BASE, "categories": {}}
def cat(name, score, evidence): R["categories"][name] = {"score": score, "evidence": evidence}
st, html = get("/"); head = html[:html.find("</head>")] if "</head>" in html else html
# 1 Crawl access
rs, robots = get("/robots.txt"); ss, sm = get("/sitemap.xml")
blocked = [a for a in AI_AGENTS if re.search(rf"User-Agent:\s*{a}\s*\n\s*Disallow:\s*/\s*\n", robots, re.I)]
s1 = (2 if st == 200 else 0) + (1 if rs == 200 else 0) + (1 if ss == 200 and "<loc>" in sm else 0) + (1 if rs == 200 and not blocked else 0)
cat("Crawl access", s1, {"home": st, "robots.txt": rs, "sitemap": ss, "ai_agents_blocked": blocked})
# 2 Structured data
blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S); types, sameas = [], 0
for b in blocks:
    try:
        d = json.loads(b); g = d.get("@graph", [d]); types += [x.get("@type") for x in g]; sameas += sum(len(x.get("sameAs", [])) for x in g)
    except Exception: types.append("INVALID")
s2 = min(5, (2 if blocks else 0) + (1 if any(t in ("ProfessionalService", "Organization", "LocalBusiness") for t in types) else 0) + (1 if "Person" in types else 0) + (1 if sameas >= 1 else 0))
cat("Structured data", s2, {"jsonld_blocks": len(blocks), "types": types, "sameAs_links": sameas})
# 3 AI-readable summary
ls, llms = get("/llms.txt")
s3 = 0 if ls != 200 else (3 + (1 if "## " in llms else 0) + (1 if len(llms) > 800 else 0))
cat("AI-readable summary (llms.txt)", s3, {"status": ls, "chars": len(llms)})
# 4 On-page SEO
title = re.search(r"<title>(.*?)</title>", head, re.S); desc = re.search(r'<meta name="description" content="(.*?)"', head)
checks = {"title_30_65": bool(title and 30 <= len(title.group(1)) <= 65), "desc_70_165": bool(desc and 70 <= len(desc.group(1)) <= 165),
          "canonical": 'rel="canonical"' in head, "one_h1": len(re.findall(r"<h1", html)) == 1, "og_image": 'property="og:image"' in head,
          "lang": bool(re.search(r'<html[^>]*lang="', html)), "img_alt": not re.search(r"<img(?![^>]*alt=)", html)}
cat("On-page SEO", round(5 * sum(checks.values()) / len(checks), 1), checks)
# 5 Performance (PageSpeed Insights, mobile) — live sites only
if "--psi" in sys.argv and BASE.startswith("https://"):
    try:
        api = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={BASE}/&strategy=mobile&category=performance&category=seo"
        with urllib.request.urlopen(api, timeout=120) as r: p = json.loads(r.read())
        lh = p["lighthouseResult"]; perf = lh["categories"]["performance"]["score"]; seo = lh["categories"]["seo"]["score"]
        a = lh["audits"]; ev = {"performance": perf, "seo": seo, "LCP": a["largest-contentful-paint"]["displayValue"], "CLS": a["cumulative-layout-shift"]["displayValue"], "TBT": a["total-blocking-time"]["displayValue"]}
        cat("Performance (mobile)", round(5 * perf, 1), ev)
    except Exception as e: cat("Performance (mobile)", None, {"error": str(e)[:120]})
print(json.dumps(R, indent=1))
