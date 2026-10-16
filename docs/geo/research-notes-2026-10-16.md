# GEO research notes (16 Oct 2026) - scratch only

## Verified primary
- Google AI features doc (upd 2025-12-10) https://developers.google.com/search/docs/appearance/ai-features : indexed + snippet-eligible; "no additional requirements... nor other special optimizations"; "no special schema.org"; "don't need to create new machine readable files, AI text files"; AI traffic in GSC Performance > Web.
- OpenAI bots https://developers.openai.com/api/docs/bots : OAI-SearchBot (blocked => not in ChatGPT search answers), GPTBot (training, independent), ChatGPT-User (user-initiated, "robots.txt rules may not apply", not used for search inclusion), OAI-AdsBot; ~24h propagation; IP json lists.
- Anthropic https://support.claude.com/en/articles/8896518 : ClaudeBot (training), Claude-User (user fetch; blocking reduces visibility), Claude-SearchBot (index; blocking reduces visibility); honour robots + Crawl-delay.
- Perplexity https://docs.perplexity.ai/guides/bots : PerplexityBot (search, not training); Perplexity-User "generally ignores robots.txt".
- Princeton GEO paper arXiv 2311.09735 (KDD 2024; v3 Jun 2024 - STALE-ish): quotations +41% PAWC, statistics ~+33%, cite sources ~+28%, fluency ~+29%; keyword stuffing -9%; rank-5 sources gain most (Cite Sources +115%); Perplexity validation smaller and mixed. Lab setting.
- Chen et al. arXiv 2509.08919 (Sep 2025, U Toronto, preprint): AI search systematic bias to earned media (third-party) vs brand-owned; big-brand bias; engines differ.
- Ahrefs llms.txt study 15 Jun 2026 https://ahrefs.com/blog/llmstxt-study/ : 137k domains, May 2026; 97% of llms.txt got zero requests; GPTBot 4.51%, OAI-SearchBot 0.74%, ClaudeBot 0.8%; "largely decoration"; audience = coding/agent tools.
- Ahrefs schema DiD 11 May 2026 https://ahrefs.com/blog/schema-ai-citations/ : 1,885 pages; AIO -4.6% (sig), AI Mode +2.4% ns, ChatGPT +2.2% ns; caveat: already-cited pages, 30-day window.
- Ahrefs 75k brands AIO correlation https://ahrefs.com/blog/ai-overview-brand-correlation/ : branded web mentions 0.664, branded anchors 0.527, branded search 0.392 (mid-2025 - possibly stale; AIO only; correlation).
- Ahrefs freshness 28 Jul 2025 https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/ : AI-cited 25.7% fresher (1064 vs 1432 days); ChatGPT freshest. correlation.
- Peec most-cited domains Mar 2026 https://docs.peec.ai/research/most-cited-domains-in-ai-search : 30M sources US; Reddit, YouTube, LinkedIn #3, Wikipedia...
- Peec ChatGPT providers Sep 2026 https://docs.peec.ai/research/chatgpt-search-result-providers : own index (Labrador) + >=8 external providers incl Google scrapers (Bright, Oxylabs), Microsoft Web IQ; "Bing is not a proxy"; Bing mainly Deep Research.
- Bing AI Performance report (Feb 2026 public preview) https://searchengineland.com/bing-webmaster-tools-testing-new-ai-performance-report-468039 : citations, cited pages, grounding queries; Copilot + Bing AI summaries + partners; no clicks.
- SparkToro/Gumshoe (Nov-Dec 2025, 2,961 prompts, 60-100 runs each): <1 in 100 same list; use visibility % not rank. https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076
- Vercel/MERJ Dec 2024 (STALE): AI crawlers don't execute JS. https://vercel.com/blog/the-rise-of-the-ai-crawler

## Google 2026 official (verified)
- Google guide "Optimizing your website for generative AI features" (pub 15 May 2026, upd 10 Jul 2026) https://developers.google.com/search/docs/fundamentals/ai-optimization-guide : AEO/GEO = still SEO; non-commodity content; must be indexed+snippet AND "included in Search generative AI features in Search Console"; mythbusting: llms.txt ignored by Google Search, no chunking needed, no rewriting for AI, inauthentic mentions not helpful, structured data not required (but keep for rich results); measure via GSC Generative AI performance report; GBP for local.
- GSC control https://support.google.com/webmasters/answer/16908024 : Settings > Search generative AI; default Include; rolled out all sites 31 Aug 2026.
- GSC Gen AI performance report https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports : 3 Jun 2026; all sites since 31 Aug 2026; impressions, pages, countries, devices, dates; no clicks/queries.
- Bing AI Performance https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview : 10 Feb 2026; total citations, avg cited pages, grounding queries (sample), page-level; recommends IndexNow + fresh content.
- GA4 native "AI Assistant" channel ~13 May 2026 (secondary sources only, e.g. https://xponent21.com/insights/ga4-ai-assistant-default-channel-group/) - verify.
- Danny Sullivan/Mueller Jan 2026 anti-chunking https://searchengineland.com/google-doesnt-want-you-to-create-bite-sized-chunks-of-your-content-467269
- Surfer Aug/Oct 2026 API vs UI https://surferseo.com/blog/llm-scraped-ai-answers-vs-api-results/ : brand overlap <=30%; ChatGPT API 13.8 brands vs 7.9 UI; source overlap 4.8% ChatGPT. => track via UI not API (vendor).
- schema.org ProfessionalService deprecated https://schema.org/ProfessionalService
- Google Org SD (upd 2026-09-08) https://developers.google.com/search/docs/appearance/structured-data/organization : sameAs, legalName, vatID, iso6523Code, address etc; home page.
- Sitemap doc (upd 2026-07-08): ignores priority/changefreq; lastmod if accurate.
- CWV web.dev: LCP<=2.5s, INP<=200ms, CLS<=0.1 p75 (page upd Oct 2024, no change).
- Images: BMP GIF JPEG PNG WebP SVG AVIF.
- hreflang only for localized variants; reciprocal; en-GB/en-AE/x-default.
- Peec Sep 2026: ChatGPT own index Labrador + 8 providers; "Bing is not a proxy".
- Niche SERP check: CIArb member directory profiles rank top for "quantum expert construction arbitration UK" and "forensic QS Dubai"; also Lexology Index (Construction Expert Witnesses), firm expert-profile pages (FTI, HKA, Ankura).

## Vendors metrics
- Peec: visibility (% runs), SoV, position, sentiment 0-100, sources.
- Profound: Answer Engine Insights (SoV, citations, sentiment), Agent Analytics (crawler logs).
- Otterly: Brand Visibility Index, brand coverage, domain/URL citations per engine; $29/15 prompts.

## GitHub (API, 16 Oct 2026) stars / pushed / licence
- AgriciDaniel/claude-seo 19050 2026-10-04 MIT
- zubair-trabzada/geo-seo-claude 11064 2026-10-16 MIT
- Albert-Weasker/niubigeo 8008 2026-10-10 Apache-2.0
- ai-robots-txt/ai.robots.txt 4197 2026-10-15 MIT
- AnswerDotAI/llms-txt 2661 2026-09-24 Apache-2.0
- GoogleChrome/lighthouse 30896 2026-10-15 Apache-2.0
- harlan-zw/unlighthouse 4902 2026-10-15 MIT
- Auriti-Labs/geo-optimizer-skill 1099 2026-10-16 MIT
- elmohq/elmo 459 2026-10-16 MIT
- jianruntech/geo-score 323 2026-10-16 MIT
- danishashko/geo-aeo-tracker 294 2026-10-09 MIT
- oneglanse/oneglanse 220 2026-10-04 MIT
- limelit-co/open 192 2026-10-12 Apache-2.0
- GEO-optim/GEO 343 2025-10-30 Apache-2.0
- cxcscmu/AutoGEO 227 2026-06-14 MIT
- StJudeWasHere/seonaut 808 2026-10-08 MIT
- janreges/siteone-crawler 957 2026-09-27 MIT
- crawlseo/crawlseo 636 2026-10-16 MIT
