import type { Commission } from "@/lib/commissions";

// Card rendering of commissions, used for the mobile preview list and the
// "View All" overlay. Mirrors the original .mobile-card markup exactly.
export default function CommissionCards({ items }: { items: Commission[] }) {
  return (
    <>
      {items.map((c, i) => (
        <div className="mobile-card" key={i}>
          <div className="mobile-card-forum">
            <span className={`forum-badge ${c.forumClass}`}>{c.forum}</span>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-label">Role</div>
            <div className="mobile-card-value">{c.role}</div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-label">Project</div>
            <div className="mobile-card-value project">{c.project}</div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-label">Location</div>
            <div className="mobile-card-value">{c.location}</div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-label">Scope</div>
            <div className="mobile-card-value scope">{c.scope}</div>
          </div>
        </div>
      ))}
    </>
  );
}
