import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Code2, ExternalLink, HeartHandshake, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import type { Locale, PortfolioContent, Project } from "@/content/site-data";
import { BrowserArtwork } from "@/components/shared/BrowserArtwork";
import { ContactActions } from "@/components/shared/ContactActions";
import { cn } from "@/lib/cn";

function text(locale: Locale, value: { de: string; en: string }): string {
  return value[locale];
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export function Hero({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-pill">
            <span className="status-dot" />
            {content.hero.eyebrow}
          </span>
          <h1>{content.hero.title}</h1>
          <p className="hero-intro">{content.hero.intro}</p>
          <p className="hero-detail">{content.hero.detail}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              {content.hero.primaryCta}
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#contact">
              {content.hero.secondaryCta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-index">NOAH / 2027</div>
          <div className="hero-monogram" aria-hidden="true">
            <span>NN</span>
            <i />
            <i />
            <i />
          </div>
          <div className="hero-note">
            <span>LOCATION</span>
            <strong>Bad Neuenahr–Ahrweiler</strong>
            <small>RLP · NRW · reachable by public transport</small>
          </div>
        </div>
      </div>
      <div className="fact-grid">
        {content.hero.facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-about" id="about">
      <div className="about-grid">
        <SectionHeading eyebrow={content.about.eyebrow} title={content.about.title} />
        <div className="about-copy">
          <p>{content.about.body}</p>
          <blockquote>“{content.about.quote}”</blockquote>
          <div className="about-signature">
            <span className="line" />
            <span>NN · Noah Neu</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  return (
    <section className="section-shell section-experience" id="experience">
      <SectionHeading eyebrow={content.experience.eyebrow} title={content.experience.title} intro={content.experience.intro} />
      <div className="experience-grid">
        <div className="timeline">
          {content.experience.items.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span className={cn("status-badge", item.status === "ongoing" ? "status-live" : "")}>
                    {item.status === "ongoing"
                      ? locale === "de"
                        ? "Laufend"
                        : "Ongoing"
                      : locale === "de"
                        ? "Abgeschlossen"
                        : "Completed"}
                  </span>
                </div>
                <h3>{item.company}</h3>
                <p className="timeline-type">{text(locale, item.type)}</p>
                <p>{text(locale, item.description)}</p>
                <div className="tag-row">
                  {item.focus.map((focus) => (
                    <span key={focus}>{focus}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="practice-card">
          <span className="card-icon">
            <Wrench size={19} aria-hidden="true" />
          </span>
          <span className="eyebrow">{content.experience.momentTitle}</span>
          <p>{content.experience.moment}</p>
          <span className="card-rule" />
          <small>{locale === "de" ? "Selbstständig · lösungsorientiert · ruhig" : "Independent · solution-focused · calm"}</small>
        </aside>
      </div>
    </section>
  );
}

export function Skills({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-skills" id="skills">
      <SectionHeading eyebrow={content.skills.eyebrow} title={content.skills.title} intro={content.skills.intro} />
      <div className="skills-grid">
        {content.skills.categories.map((category) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-card-head">
              <span className="card-icon">
                <Code2 size={18} aria-hidden="true" />
              </span>
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.items
                .filter((item) => item.visible)
                .map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FeaturedProject({ locale, content, project }: { locale: Locale; content: PortfolioContent; project: Project }) {
  const href = locale === "en" ? `/en/projects/${project.slug}` : `/projekte/${project.slug}`;
  return (
    <section className="section-shell section-project" id="projects">
      <div className="project-intro">
        <SectionHeading
          eyebrow={content.projectSection.eyebrow}
          title={content.projectSection.title}
          intro={content.projectSection.intro}
        />
        <Link className="text-link" href={locale === "en" ? "/en/projects" : "/projekte"}>
          {content.projectSection.viewAll}
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <article className="featured-project">
        <div className="project-art-wrap">
          <BrowserArtwork />
        </div>
        <div className="project-copy">
          <div className="project-meta">
            <span className="status-badge status-live">
              <span className="status-dot" />
              {content.projectSection.status[project.status]}
            </span>
            <span className="project-number">01 / 01</span>
          </div>
          <h3>{text(locale, project.title)}</h3>
          <p>{text(locale, project.shortDescription)}</p>
          <div className="project-tech">
            <span>{content.projectSection.technologiesLabel}</span>
            <div>
              {project.technologies.slice(0, 5).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
          <Link className="button button-secondary" href={href}>
            {content.projectSection.detailsLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </section>
  );
}

export function Learning({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-learning">
      <div className="learning-grid">
        <SectionHeading eyebrow={content.learning.eyebrow} title={content.learning.title} intro={content.learning.intro} />
        <div className="learning-list">
          {content.learning.items.map((item, index) => (
            <div className="learning-item" key={item.label}>
              <span className="learning-index">0{index + 1}</span>
              <strong>{item.label}</strong>
              <span>{item.state}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiAndVolunteering({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-duo">
      <article className="ai-card">
        <div className="duo-head">
          <span className="card-icon">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span className="eyebrow">{content.ai.eyebrow}</span>
        </div>
        <h2>{content.ai.title}</h2>
        <p>{content.ai.body}</p>
        <ul className="check-list">
          {content.ai.points.map((point) => (
            <li key={point}>
              <Check size={15} aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </article>
      <article className="volunteer-card">
        <div className="duo-head">
          <span className="card-icon">
            <HeartHandshake size={18} aria-hidden="true" />
          </span>
          <span className="eyebrow">{content.volunteering.eyebrow}</span>
        </div>
        <h2>{content.volunteering.title}</h2>
        <p>{content.volunteering.body}</p>
        <div className="tag-row">
          {content.volunteering.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    </section>
  );
}

export function Interests({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-interests">
      <div className="interests-head">
        <SectionHeading eyebrow={content.interests.eyebrow} title={content.interests.title} />
      </div>
      <div className="interests-list">
        {content.interests.items.map((item, index) => (
          <span key={item}>
            <span>0{index + 1}</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Contact({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell section-contact" id="contact">
      <div className="contact-grid">
        <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} />
        <div className="contact-copy">
          <p>{content.contact.body}</p>
          <div className="email-display">
            <span className="eyebrow">{content.contact.emailLabel}</span>
            <ContactActions writeLabel={content.contact.emailWrite} copyLabel={content.contact.copy} copiedLabel={content.contact.copied} />
          </div>
          <p className="contact-note">
            <ShieldCheck size={15} aria-hidden="true" />
            {content.contact.note}
          </p>
        </div>
      </div>
      <div className="profile-links">
        <span className="eyebrow">{content.contact.profiles}</span>
        <div>
          <a href="https://github.com/NeuNoah" target="_blank" rel="noopener noreferrer">
            GitHub <ExternalLink size={14} aria-hidden="true" />
            <small>{content.locale === "de" ? "Profil im Aufbau" : "Profile in progress"}</small>
          </a>
          <a href="https://de.linkedin.com/in/neu-noah" target="_blank" rel="noopener noreferrer">
            LinkedIn <ExternalLink size={14} aria-hidden="true" />
            <small>{content.locale === "de" ? "Profil im Aufbau" : "Profile in progress"}</small>
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeSections({ locale, content, project }: { locale: Locale; content: PortfolioContent; project: Project }) {
  return (
    <>
      <Hero locale={locale} content={content} />
      <About content={content} />
      <Experience locale={locale} content={content} />
      <Skills content={content} />
      <FeaturedProject locale={locale} content={content} project={project} />
      <Learning content={content} />
      <AiAndVolunteering content={content} />
      <Interests content={content} />
      <Contact content={content} />
    </>
  );
}
