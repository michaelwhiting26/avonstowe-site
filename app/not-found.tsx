import Link from "next/link";
import { primaryNav } from "@/content/site";

export default function NotFound() {
  return (
    <div className="section">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-[length:var(--text-h1)]">This page does not exist</h1>
        <p className="lede mt-5">
          The page you asked for is not here. It may have been removed when this site was
          restructured.
        </p>

        <ul className="mt-10 max-w-md">
          {primaryNav.map((item) => (
            <li key={item.href} className="border-t border-[var(--color-paper-line)]">
              <Link href={item.href} className="block py-3 text-[var(--color-ink)] hover:text-[var(--color-brass-deep)]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
