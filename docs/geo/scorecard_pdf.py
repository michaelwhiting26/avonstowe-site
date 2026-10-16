"""Build the Avonstowe Search Scorecard PDF from the dashboard's data files.
Usage: python3 scorecard_pdf.py <data_dir> <out.pdf>   (data_dir holds scores/actions/prompts/roadmap.json, optional ai_baseline.json)
Renders HTML with Playwright Chromium (PW env var = path to a playwright package), then strips PDF metadata."""
import sys, json, html, os, subprocess, datetime
D, OUT = sys.argv[1], sys.argv[2]; e = html.escape
L = lambda n: json.load(open(f"{D}/{n}.json"))["rows"] if os.path.exists(f"{D}/{n}.json") else []
S, A, P, R = L("scores"), L("actions"), L("prompts"), L("roadmap")
AI = json.load(open(f"{D}/ai_baseline.json")) if os.path.exists(f"{D}/ai_baseline.json") else []
sites = list(dict.fromkeys(r["site"] for r in S)); B, N = sites[0], sites[-1]
cats = list(dict.fromkeys(r["category"] for r in S))
def sc(site, c):
    r = next((r for r in S if r["site"] == site and r["category"] == c), None); return None if r is None else r["score"]
def ev(c):
    rs = [r for r in S if r["category"] == c and r.get("evidence")]; return (rs[-1] if rs else {"evidence": ""})["evidence"]
def meth(c): return next(r["method"] for r in S if r["category"] == c)
def f(v): return "Not checked" if v is None else (("%.1f" % v).rstrip("0").rstrip("."))
both = [c for c in cats if sc(N, c) is not None and sc(B, c) is not None]
tb, tn = sum(sc(B, c) or 0 for c in both), sum(sc(N, c) for c in both)
tiles_c = [c for c in ["Crawl and index", "Schema and meta tags", "Content depth and freshness", "Page speed and stability"] if c in cats]
tiles = "".join(f'<div class="tile"><h3>{e(c)}</h3><div class="num">{f(sc(N, c))}<span>of 5, now</span></div><div class="was">Before <b>{f(sc(B, c))}</b></div></div>' for c in tiles_c)
rows = [c for c in cats if sc(B, c) is not None or sc(N, c) is not None]
W, Lm, Rm, rh = 640, 210, 40, 40; H = 20 + len(rows) * rh + 22; x = lambda v: Lm + (W - Lm - Rm) * v / 5
svg = [f'<svg viewBox="0 0 {W} {H}" width="100%">'] + [f'<line x1="{x(t)}" x2="{x(t)}" y1="10" y2="{H-22}" stroke="#e3e7ee"/><text x="{x(t)}" y="{H-6}" text-anchor="middle" class="tk">{t}</text>' for t in range(6)]
for i, c in enumerate(rows):
    y0 = 14 + i * rh; svg.append(f'<text x="{Lm-10}" y="{y0+15}" text-anchor="end" class="lb">{e(c)}</text>')
    for k, (site, col) in enumerate([(B, "#b9c2d0"), (N, "#b8902f")]):
        v = sc(site, c)
        if v is None: continue
        yy = y0 + k * 15; svg.append(f'<rect x="{x(0)}" y="{yy}" width="{max(2, x(v)-x(0))}" height="12" rx="3" fill="{col}"/><text x="{x(v)+5}" y="{yy+10}" class="vl">{f(v)}</text>')
svg.append("</svg>")
cat_rows = "".join(f"<tr><td>{e(c)}</td><td>{e(meth(c))}</td><td class=n>{f(sc(B, c))}</td><td class=n>{'' if sc(N, c) is None else f(sc(N, c))}</td><td class=m>{e(ev(c))}</td></tr>" for c in cats)
order = {"High": 0, "Medium": 1, "Low": 2}
act_rows = "".join(f"<tr><td>{e(a['action'])}</td><td><span class='pill {a['impact'][:2].lower()}'>{e(a['impact'])}</span></td><td>{e(a['owner'])}</td><td>{e(a['status'])}</td><td class=m>{e(a['detail'])}</td></tr>" for a in sorted(A, key=lambda a: order[a["impact"]]))
rm_rows = "".join(f"<tr><td class=n>{e(r['period'])}</td><td><b>{e(r['focus'])}</b></td><td class=m>{e(r['actions'])}</td><td>{e(r['owner'])}</td><td>{e(r['measure'])}</td></tr>" for r in R)
pr_rows = "".join(f"<tr><td class=n>{i}</td><td>{e(p['prompt'])}</td><td>{e(p.get('status',''))}</td><td class=m>{e(p.get('shown_instead',''))}</td></tr>" for i, p in enumerate(P, 1))
ai_block = ""
if AI:
    engines = list(dict.fromkeys(a["engine"] for a in AI)); summ = []
    for en in engines:
        rs = [a for a in AI if a["engine"] == en]; ok = [a for a in rs if a.get("status") == "ok"]
        summ.append(f"<tr><td>{e(en)}</td><td class=n>{len(ok)} of {len(rs)}</td><td class=n>{sum(1 for a in ok if a.get('mentioned'))}</td><td class=n>{sum(1 for a in ok if a.get('cited'))}</td></tr>")
    from collections import Counter
    firms = Counter(n for a in AI for n in a.get("firms_named", []) or []).most_common(10)
    ai_block = f"""<h2>AI answers: first baseline</h2><p class="note">Each question asked once per engine on 16 October 2026, not logged in. ChatGPT not tested (it would have run in Michael's own account).</p>
<table><thead><tr><th>Engine</th><th>Answers read</th><th>Named Avonstowe</th><th>Linked the site</th></tr></thead><tbody>{''.join(summ)}</tbody></table>
<p class="note" style="margin-top:6pt">Named most often instead: {e(', '.join(f'{n} ({c})' for n, c in firms))}</p>"""
plan = """<h2>Specialist pages: plan for approval</h2><p class="note">Built only from the CV of record and the existing site copy. Nothing goes live without Michael's approval.</p>
<table><thead><tr><th>Page</th><th>What it holds</th><th>Source</th></tr></thead><tbody>
<tr><td>Michael Whiting</td><td>Bio, credentials, career, matters he worked on</td><td class=m>lib/person.ts, CV 20261015</td></tr>
<tr><td>Forensic quantum analysis</td><td>Service text; gas export pipelines (measured mile), commercial office (Court of Session), retirement village (adjudication)</td><td class=m>lib/site.ts, lib/matters.ts, CV quantum section</td></tr>
<tr><td>Claims, disputes and commercial recovery</td><td>Service text; the three London commercial-recovery matters</td><td class=m>lib/site.ts, lib/matters.ts</td></tr>
<tr><td>Quantity surveying and commercial management</td><td>Service text; Balfour Beatty to McLaren to Avonstowe; additional project experience</td><td class=m>lib/site.ts, lib/person.ts, CV</td></tr>
<tr><td>Case notes</td><td>One short note per evidenced matter: forum, parties, heads of claim</td><td class=m>lib/matters.ts (LPG and Phosphate held back until evidenced)</td></tr>
</tbody></table><p class="note" style="margin-top:6pt">Deferred: separate UK and Middle East pages, which would be thin until there are articles and case notes to fill them.</p>"""
today = datetime.date.today().strftime("%-d %B %Y")
doc = f"""<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Avonstowe Search Scorecard</title><style>
@page {{ size: A4; margin: 14mm 13mm 14mm; }}
body {{ font-family: "Helvetica Neue", Arial, sans-serif; color: #14213a; font-size: 9.4pt; line-height: 1.4; margin: 0; }}
h1 {{ font-family: Baskerville, Georgia, serif; font-weight: 400; font-size: 25pt; margin: 0; color: #0a1628; }}
.kicker {{ font-size: 7.5pt; letter-spacing: .24em; text-transform: uppercase; color: #9a7a2a; margin-bottom: 4pt; }}
.take {{ color: #3b4a66; margin: 6pt 0 12pt; max-width: 170mm; }} .take b {{ color: #0a1628; }}
.tiles {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 7pt; margin-bottom: 10pt; }}
.tile {{ border: 1px solid #dfe4ec; border-top: 2px solid #b8902f; padding: 8pt 9pt; }} .tile h3 {{ font-size: 8.5pt; font-weight: 600; margin: 0 0 6pt; }}
.num {{ font-family: Baskerville, Georgia, serif; font-size: 24pt; line-height: 1; }} .num span {{ font-family: "Helvetica Neue", Arial, sans-serif; font-size: 7.5pt; color: #6b7894; margin-left: 4pt; }}
.was {{ font-size: 8pt; color: #6b7894; margin-top: 5pt; }} .was b {{ color: #14213a; }}
h2 {{ font-size: 11.5pt; font-weight: 600; margin: 12pt 0 3pt; color: #0a1628; }} .note {{ color: #6b7894; font-size: 8pt; margin: 0 0 6pt; }}
table {{ width: 100%; border-collapse: collapse; font-size: 8.2pt; }} th {{ text-align: left; color: #6b7894; font-weight: 600; border-bottom: 1px solid #c9d1de; padding: 3pt 5pt; }}
td {{ border-bottom: 1px solid #e8ecf2; padding: 4pt 5pt; vertical-align: top; }} td.n {{ font-variant-numeric: tabular-nums; white-space: nowrap; }} td.m {{ color: #4d5b78; }}
tr {{ break-inside: avoid; }} .pill {{ border: 1px solid #d6dce6; border-radius: 99px; padding: 0 6pt; white-space: nowrap; }} .pill.hi {{ color: #a3341f; }} .pill.me {{ color: #9a6a00; }} .pill.lo {{ color: #6b7894; }}
.legend {{ font-size: 8pt; color: #6b7894; }} .legend i {{ display: inline-block; width: 9px; height: 9px; border-radius: 2px; margin: 0 4px 0 10px; vertical-align: -1px; }}
svg text.lb {{ font-size: 11px; fill: #14213a; }} svg text.tk, svg text.vl {{ font-size: 10px; fill: #6b7894; }} .foot {{ margin-top: 10pt; color: #8a95ab; font-size: 7.5pt; }} .pb {{ break-before: page; }}
</style></head><body>
<div class="kicker">Avonstowe · SEO and AI search · {today}</div><h1>Avonstowe Search Scorecard</h1>
<p class="take">Live now: <b>{f(tn)} of {len(both)*5}</b> on the {len(both)} categories measured before and after, against <b>{f(tb)}</b> before the 16 October update. In AI answers Avonstowe is named only when asked about by name. Being named on other sites is the next lever.</p>
<div class="tiles">{tiles}</div>
<h2>Before and now</h2><p class="note">Scores out of 5. Categories not yet measured are left off. <span class="legend"><i style="background:#b9c2d0"></i>Before<i style="background:#b8902f"></i>Now</span></p>
{''.join(svg)}
{ai_block}
<h2>All twelve categories</h2><p class="note">Audit: measured by script or Lighthouse. Manual: checked by hand. AI answers: the question panel.</p>
<table><thead><tr><th>Category</th><th>How</th><th>Before</th><th>Now</th><th>Evidence</th></tr></thead><tbody>{cat_rows}</tbody></table>
<div class="pb"></div>
<h2>Twelve-month roadmap</h2><p class="note">October 2026 to October 2027. New wording, listings, tracking and any professional claim go live only with Michael's approval.</p>
<table><thead><tr><th>When</th><th>Focus</th><th>What happens</th><th>Who</th><th>Success looks like</th></tr></thead><tbody>{rm_rows}</tbody></table>
{plan}
<div class="pb"></div>
<h2>What moves the scores</h2><p class="note">Ranked by impact. Owner says who has to do it.</p>
<table><thead><tr><th>Action</th><th>Impact</th><th>Owner</th><th>Status</th><th>Why</th></tr></thead><tbody>{act_rows}</tbody></table>
<h2>Test questions</h2><p class="note">Latest web-search check, 16 October 2026: who is shown instead of Avonstowe.</p>
<table><thead><tr><th>#</th><th>Question</th><th>Result</th><th>Shown instead</th></tr></thead><tbody>{pr_rows}</tbody></table>
<p class="foot">Live dashboard: claude.ai/artifact/JXaAyJHMUzaHmmDTBAYdqe · Audit script: docs/geo/geo_audit.py in the site repository.</p></body></html>"""
open(f"{D}/print.html", "w").write(doc)
js = f"const {{ chromium }} = require(process.env.PW); (async () => {{ const b = await chromium.launch(); const p = await b.newPage(); await p.goto('file://{D}/print.html'); await p.pdf({{ path: process.argv[2], format: 'A4', printBackground: true, preferCSSPageSize: true }}); await b.close(); }})();"
open(f"{D}/_pdf.cjs", "w").write(js); subprocess.run(["node", f"{D}/_pdf.cjs", OUT], check=True)
import fitz
d = fitz.open(OUT); d.set_metadata({"title": "Avonstowe Search Scorecard", "author": "", "subject": "", "keywords": "", "creator": "", "producer": ""}); d.save(OUT + ".tmp", garbage=3, deflate=True); n = d.page_count; d.close(); os.replace(OUT + ".tmp", OUT)
print("PDF", OUT, n, "pages")
