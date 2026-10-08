import type { Metadata } from "next";
import Link from "next/link";
import { legalDocs, lastUpdated } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy and terms | Avonstowe",
  description:
    "Privacy notice, terms of use and cookie position for the Avonstowe website. The site collects no personal data and sets no cookies.",
  alternates: { canonical: "/legal/" },
};

export default function Legal() {
  return (
    <article className="legal">
      <p className="eyebrow">Last updated {lastUpdated}</p>
      <h1>Privacy and terms</h1>
      {legalDocs.map((doc) => (
        <section key={doc.id} id={doc.id}>
          <h2>{doc.title}</h2>
          {doc.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
      <p>
        <Link href="/">Back to the home page</Link>
      </p>
    </article>
  );
}
