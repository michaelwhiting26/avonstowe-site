import type { Commission } from "@/lib/commissions";

// Inline styles preserved verbatim from the original <td> attributes so the
// desktop table renders identically.
const roleStyle = { color: "#c5d8f4", fontSize: "11px", whiteSpace: "nowrap" } as const;
const scopeStyle = { color: "#6a8fc4", fontSize: "11px" } as const;

// Desktop scrollable table of commissions, mirroring the original .table-wrap markup.
export default function CommissionTable({ items }: { items: Commission[] }) {
  // data-lenis-prevent: Lenis' smooth wheel handler swallows wheel events
  // page-wide, so without it this inner scroll area never scrolls natively.
  return (
    <div className="table-wrap" data-lenis-prevent>
      <table>
        <thead>
          <tr>
            <th>Forum</th>
            <th>Role</th>
            <th>Project</th>
            <th>Location</th>
            <th>Scope</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={i}>
              <td className="forum">
                <span className={`forum-badge ${c.forumClass}`}>{c.forum}</span>
              </td>
              <td style={roleStyle}>{c.role}</td>
              <td className="project">{c.project}</td>
              <td className="location">{c.location}</td>
              <td style={scopeStyle}>{c.scope}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
