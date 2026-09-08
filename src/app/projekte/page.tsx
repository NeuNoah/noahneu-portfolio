import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BrowserArtwork } from "@/components/shared/BrowserArtwork";
import { getPortfolioContent, getPortfolioProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekte",
  alternates: { canonical: "/projekte", languages: { de: "/projekte", en: "/en/projects" } },
};

export default async function ProjectsPage() {
  const [content, projectList] = await Promise.all([getPortfolioContent("de"), getPortfolioProjects()]);
  return (
    <>
      <Header locale="de" content={content} />
      <main className="page-shell">
        <div className="section-heading">
          <span className="eyebrow">{content.projectsPage.eyebrow}</span>
          <h1>{content.projectsPage.title}</h1>
          <p>{content.projectsPage.intro}</p>
        </div>
        <div className="project-list">
          {projectList.map((project) => (
            <article className="project-list-card" key={project.slug}>
              <BrowserArtwork compact />
              <div>
                <span className="status-badge status-live">
                  <span className="status-dot" />
                  {content.projectSection.status[project.status]}
                </span>
                <h2>{project.title.de}</h2>
                <p>{project.shortDescription.de}</p>
              </div>
              <Link className="button button-secondary" href={`/projekte/${project.slug}`}>
                {content.projectSection.detailsLabel}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <Link className="back-link" href="/">
          {content.projectsPage.back}
        </Link>
      </main>
      <Footer locale="de" content={content} />
    </>
  );
}
