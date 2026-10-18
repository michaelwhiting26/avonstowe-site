// /llms.txt — a plain summary for AI assistants (llmstxt.org format).
// Generated at build time from the same copy as the page, so it never drifts.
import { site, services } from "@/lib/site";
import { person } from "@/lib/person";

export const dynamic = "force-static";

export function GET() {
  const held = person.credentials.filter((c) => !c.inProgress).map((c) => c.text);
  const reading = person.credentials.filter((c) => c.inProgress).map((c) => `${c.text} (${c.expected ? `expected ${c.expected}` : "in progress"})`);
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Services",
    ...services.map((s) => `- ${s.title}: ${s.text}`),
    "",
    "## About Michael",
    `- ${person.name}, ${person.role}. ${[...held, ...reading].join("; ")}.`,
    `- ${person.bio}`,
    `- Career: ${person.career.map((c) => `${c.organisation} ${c.period.replace("—", "to")}`).join("; ")}.`,
    "",
    "## Contact",
    `- Email: ${site.email}.`,
    `- ${site.legalEntity}, ${site.licence}, ${site.location}.`,
    "",
    "## Pages",
    `- [Home](${site.url}/): construction and engineering disputes, experience, the practitioner and contact.`,
    `- [Legal](${site.url}/legal/): privacy notice, terms of use and cookie policy.`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
