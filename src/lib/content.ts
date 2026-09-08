import { getContent, getProject, projects, type Experience, type Locale, type PortfolioContent, type Project } from "@/content/site-data";
import { isSanityConfigured, sanityClient } from "@/sanity/lib/client";

type SanityProfile = {
  heroDe?: string;
  heroEn?: string;
  heroDetailDe?: string;
  heroDetailEn?: string;
  aboutDe?: string;
  aboutEn?: string;
  aboutQuoteDe?: string;
  aboutQuoteEn?: string;
};

type SanityExperience = {
  company?: string;
  dateLabel?: string;
  tasks?: string[];
  typeDe?: string;
  typeEn?: string;
  descriptionDe?: string;
  descriptionEn?: string;
  status?: "completed" | "ongoing";
};

type SanitySkill = { name?: string; nameEn?: string; level?: string; levelEn?: string; visible?: boolean };
type SanitySkillCategory = { title?: string; titleEn?: string; skills?: SanitySkill[] };

type SanityProject = {
  titleDe?: string;
  titleEn?: string;
  slugDe?: { current?: string };
  slugEn?: { current?: string };
  status?: Project["status"];
  shortDescriptionDe?: string;
  shortDescriptionEn?: string;
  descriptionDe?: string;
  descriptionEn?: string;
  technologies?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  workingDe?: string[];
  workingEn?: string[];
  learningDe?: string[];
  learningEn?: string[];
  currentDe?: string[];
  currentEn?: string[];
  limitationsDe?: string[];
  limitationsEn?: string[];
  nextStepsDe?: string[];
  nextStepsEn?: string[];
};

const profileQuery = `*[_type == "profile"][0]{heroDe, heroEn, heroDetailDe, heroDetailEn, aboutDe, aboutEn, aboutQuoteDe, aboutQuoteEn}`;
const experienceQuery = `*[_type == "experience" && visible != false] | order(sortOrder asc, _createdAt asc){company, dateLabel, tasks, typeDe, typeEn, descriptionDe, descriptionEn, status}`;
const skillsQuery = `*[_type == "skillCategory"] | order(_createdAt asc){title, titleEn, skills[]{name, nameEn, level, levelEn, visible}}`;
const projectsQuery = `*[_type == "project" && visible != false] | order(featured desc, _createdAt asc){titleDe, titleEn, slugDe, slugEn, status, shortDescriptionDe, shortDescriptionEn, descriptionDe, descriptionEn, technologies, repositoryUrl, demoUrl, featured, workingDe, workingEn, learningDe, learningEn, currentDe, currentEn, limitationsDe, limitationsEn, nextStepsDe, nextStepsEn}`;

async function fetchSanity<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<T>(query, params, { cache: "no-store" });
  } catch {
    return null;
  }
}

function mapExperience(item: SanityExperience, fallback: Experience | undefined): Experience {
  return {
    company: item.company || fallback?.company || "",
    period: item.dateLabel || fallback?.period || "",
    type: { de: item.typeDe || fallback?.type.de || "", en: item.typeEn || fallback?.type.en || "" },
    focus: item.tasks?.length ? item.tasks : fallback?.focus || [],
    status: item.status || fallback?.status || "completed",
    description: { de: item.descriptionDe || fallback?.description.de || "", en: item.descriptionEn || fallback?.description.en || "" },
  };
}

function mapProject(item: SanityProject, fallback: Project | undefined): Project {
  const slug = item.slugDe?.current || item.slugEn?.current || fallback?.slug || "";
  const repositoryUrl = item.repositoryUrl || fallback?.repositoryUrl;
  const demoUrl = item.demoUrl || fallback?.demoUrl;
  return {
    slug,
    title: { de: item.titleDe || fallback?.title.de || "", en: item.titleEn || fallback?.title.en || "" },
    status: item.status || fallback?.status || "planned",
    shortDescription: {
      de: item.shortDescriptionDe || fallback?.shortDescription.de || "",
      en: item.shortDescriptionEn || fallback?.shortDescription.en || "",
    },
    description: { de: item.descriptionDe || fallback?.description.de || "", en: item.descriptionEn || fallback?.description.en || "" },
    technologies: item.technologies?.length ? item.technologies : fallback?.technologies || [],
    featured: item.featured ?? fallback?.featured ?? false,
    ...(repositoryUrl ? { repositoryUrl } : {}),
    ...(demoUrl ? { demoUrl } : {}),
    working: { de: item.workingDe || fallback?.working.de || [], en: item.workingEn || fallback?.working.en || [] },
    learning: { de: item.learningDe || fallback?.learning.de || [], en: item.learningEn || fallback?.learning.en || [] },
    current: { de: item.currentDe || fallback?.current.de || [], en: item.currentEn || fallback?.current.en || [] },
    limitations: { de: item.limitationsDe || fallback?.limitations.de || [], en: item.limitationsEn || fallback?.limitations.en || [] },
    nextSteps: { de: item.nextStepsDe || fallback?.nextSteps.de || [], en: item.nextStepsEn || fallback?.nextSteps.en || [] },
  };
}

export async function getPortfolioContent(locale: Locale): Promise<PortfolioContent> {
  const fallback = getContent(locale);
  if (!isSanityConfigured) return fallback;

  const [profile, experiences, categories] = await Promise.all([
    fetchSanity<SanityProfile>(profileQuery),
    fetchSanity<SanityExperience[]>(experienceQuery),
    fetchSanity<SanitySkillCategory[]>(skillsQuery),
  ]);

  const experienceItems = experiences?.length
    ? experiences.map((item, index) => mapExperience(item, fallback.experience.items[index]))
    : fallback.experience.items;
  const skillCategories = categories?.length
    ? categories.map((category, categoryIndex) => ({
        title: locale === "en" ? category.titleEn || category.title || "" : category.title || "",
        items: (category.skills || [])
          .filter((skill) => skill.visible !== false)
          .map((skill, skillIndex) => ({
            name:
              locale === "en"
                ? skill.nameEn || skill.name || fallback.skills.categories[categoryIndex]?.items[skillIndex]?.name || ""
                : skill.name || "",
            level:
              locale === "en"
                ? skill.levelEn || skill.level || fallback.skills.categories[categoryIndex]?.items[skillIndex]?.level || ""
                : skill.level || "",
            visible: true,
          })),
      }))
    : fallback.skills.categories;

  return {
    ...fallback,
    hero: {
      ...fallback.hero,
      intro: locale === "en" ? profile?.heroEn || fallback.hero.intro : profile?.heroDe || fallback.hero.intro,
      detail: locale === "en" ? profile?.heroDetailEn || fallback.hero.detail : profile?.heroDetailDe || fallback.hero.detail,
    },
    about: {
      ...fallback.about,
      body: locale === "en" ? profile?.aboutEn || fallback.about.body : profile?.aboutDe || fallback.about.body,
      quote: locale === "en" ? profile?.aboutQuoteEn || fallback.about.quote : profile?.aboutQuoteDe || fallback.about.quote,
    },
    experience: { ...fallback.experience, items: experienceItems },
    skills: { ...fallback.skills, categories: skillCategories },
  };
}

export async function getPortfolioProject(slug: string): Promise<Project | undefined> {
  const fallback = getProject(slug);
  const query = `*[_type == "project" && visible != false && (slugDe.current == $slug || slugEn.current == $slug)][0]{titleDe, titleEn, slugDe, slugEn, status, shortDescriptionDe, shortDescriptionEn, descriptionDe, descriptionEn, technologies, repositoryUrl, demoUrl, featured, workingDe, workingEn, learningDe, learningEn, currentDe, currentEn, limitationsDe, limitationsEn, nextStepsDe, nextStepsEn}`;
  const result = await fetchSanity<SanityProject>(query, { slug });
  return result ? mapProject(result, fallback) : fallback;
}

export async function getPortfolioProjects(): Promise<Project[]> {
  const result = await fetchSanity<SanityProject[]>(projectsQuery);
  if (!result?.length) return projects;
  return result.map((item) => mapProject(item, getProject(item.slugDe?.current || item.slugEn?.current || "")));
}
