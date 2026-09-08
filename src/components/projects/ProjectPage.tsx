import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import type { Locale, PortfolioContent, Project } from "@/content/site-data";
import { BrowserArtwork } from "@/components/shared/BrowserArtwork";

function text(locale: Locale, value: { de: string; en: string }): string {
  return value[locale];
}

export function ProjectPage({ locale, content, project }: { locale: Locale; content: PortfolioContent; project: Project }) {
  const labels =
    locale === "de"
      ? {
          working: "Was bereits funktioniert",
          current: "Woran ich aktuell arbeite",
          learning: "Was ich dabei lerne",
          limitations: "Ehrliche Einschränkungen",
          next: "Nächste Schritte",
          technologies: "Technische Übersicht",
          back: "Zurück zu allen Projekten",
          repo: "Quellcode derzeit nicht öffentlich",
        }
      : {
          working: "What already works",
          current: "What I am working on",
          learning: "What I am learning",
          limitations: "Honest limitations",
          next: "Next steps",
          technologies: "Technical overview",
          back: "Back to all projects",
          repo: "Source code is not public yet",
        };
  const projectHref = locale === "de" ? "/projekte" : "/en/projects";
  return (
    <main className="page-shell">
      <Link className="back-link" href={projectHref}>
        <ArrowLeft size={15} aria-hidden="true" />
        {labels.back}
      </Link>
      <div className="detail-hero">
        <div>
          <span className="eyebrow">{content.projectSection.eyebrow}</span>
          <h1>{text(locale, project.title)}</h1>
          <div className="detail-meta">
            <span className="status-badge status-live">
              <span className="status-dot" />
              {content.projectSection.status[project.status]}
            </span>
            <span className="project-number">Rust · Servo</span>
          </div>
          <p>{text(locale, project.description)}</p>
          <p className="project-ai-note">
            <strong>{locale === "de" ? "Transparenter KI-Einsatz." : "Transparent AI use."}</strong>{" "}
            {locale === "de"
              ? "Ich nutze moderne KI-Werkzeuge für Recherche, Strukturierung, Fehlersuche und zum Erlernen neuer Rust- und Servo-Konzepte."
              : "I use modern AI tools for research, structuring, debugging and learning new Rust and Servo concepts."}
          </p>
        </div>
        <BrowserArtwork />
      </div>
      <section className="detail-section">
        <h2>{labels.technologies}</h2>
        <div>
          <div className="detail-block">
            <h3>{content.projectSection.technologiesLabel}</h3>
            <div className="tag-row">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {project.repositoryUrl ? (
              <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                GitHub <ExternalLink size={14} aria-hidden="true" />
              </a>
            ) : (
              <p className="repo-note">{labels.repo}</p>
            )}
          </div>
          <div className="detail-block">
            <h3>{labels.working}</h3>
            <ul>
              {project.working[locale].map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-block">
            <h3>{labels.current}</h3>
            <ul>
              {project.current[locale].map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-block">
            <h3>{labels.learning}</h3>
            <ul>
              {project.learning[locale].map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-block">
            <h3>{labels.limitations}</h3>
            <ul>
              {project.limitations[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="detail-block">
            <h3>{labels.next}</h3>
            <ul>
              {project.nextSteps[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
