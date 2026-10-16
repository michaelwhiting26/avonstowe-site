// /llms.txt — a plain summary for AI assistants (llmstxt.org format).
// Generated at build time from the same copy as the page, so it never drifts.
import { site, hero, services, enquiries } from "@/lib/site";
import { person } from "@/lib/person";

export const dynamic = "force-static";

export function GET() {
  const held = person.credentials.filter((c) => !c.inProgress).map((c) => c.text);
  const reading = person.credentials.filter((c) => c.inProgress).map((c) => `${c.text} (in progress)`);
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    hero.sub,
    "",
    "## Services",
    ...services.map((s) => `- ${s.title}: ${s.text}`),
    "",
    "## Who does the work",
    `- ${person.name}, ${person.role}. ${[...held, ...reading].join("; ")}.`,
    `- ${person.bio}`,
    `- Career: ${person.career.map((c) => `${c.organisation} ${c.period.replace("—", "to")}`).join("; ")}.`,
    "",
    "## Contact",
    `- Email: ${site.email}. ${enquiries}`,
    `- ${site.legalEntity}, ${site.licence}, ${site.location}.`,
    "",
    "## Pages",
    `- [Home](${site.url}/): services, selected matters, the practitioner and contact.`,
    `- [Legal](${site.url}/legal/): privacy notice, terms of use and cookie policy.`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
