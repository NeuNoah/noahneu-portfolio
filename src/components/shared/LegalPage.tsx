import Link from "next/link";
import type { PortfolioContent } from "@/content/site-data";

export function LegalPage({ content, type }: { content: PortfolioContent; type: "legal" | "privacy" }) {
  const isLegal = type === "legal";
  const title = isLegal ? content.legal.noticeTitle : content.legal.privacyTitle;
  const intro = isLegal ? content.legal.noticeBody : content.legal.privacyBody;
  return (
    <main className="page-shell">
      <Link className="back-link" href={content.locale === "en" ? "/en" : "/"}>
        {content.projectsPage.back}
      </Link>
      <div className="section-heading">
        <span className="eyebrow">{isLegal ? "LEGAL / 01" : "PRIVACY / 01"}</span>
        <h1>{title}</h1>
      </div>
      <div className="legal-copy">
        <p className="legal-note">{intro}</p>
        {content.legal.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <p>
          {isLegal
            ? "Bitte prüfen Sie die Angaben vor einer öffentlichen Veröffentlichung mit einer geeigneten rechtlichen Beratung."
            : "Wenn sich die Inhalte oder technischen Dienste ändern, wird diese Information entsprechend aktualisiert."}
        </p>
      </div>
    </main>
  );
}
