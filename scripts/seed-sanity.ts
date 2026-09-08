import { createClient } from "next-sanity";
import { readFileSync } from "node:fs";
import { projects, siteData } from "../src/content/site-data";

try {
  const envFile = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  for (const line of envFile.split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    const key = match?.[1];
    const value = match?.[2];
    if (key && value !== undefined && process.env[key] === undefined) process.env[key] = value;
  }
} catch {
  // Environment variables may be supplied by the shell or CI instead.
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

const client =
  projectId && writeToken
    ? createClient({
        projectId,
        dataset,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01",
        token: writeToken,
        useCdn: false,
        perspective: "published",
      })
    : null;

const isoDate = (value: string) => new Date(`${value}T00:00:00.000Z`).toISOString();

const documents = () => {
  const de = siteData.de;
  const en = siteData.en;
  const experiences = [
    {
      _id: "experience-cyteq-year",
      _type: "experience",
      company: "CYTEQ GmbH",
      dateLabel: "10.08.2026 – 22.06.2027",
      startDate: isoDate("2026-08-10"),
      endDate: isoDate("2027-06-22"),
      tasks: de.experience.items[0]!.focus,
      visible: true,
      sortOrder: 1,
      descriptionDe: de.experience.items[0]!.description.de,
      descriptionEn: en.experience.items[0]!.description.en,
      typeDe: de.experience.items[0]!.type.de,
      typeEn: en.experience.items[0]!.type.en,
      status: "ongoing",
    },
    {
      _id: "experience-cyteq-internship",
      _type: "experience",
      company: "CYTEQ GmbH",
      dateLabel: "15.06.2026 – 25.06.2026",
      startDate: isoDate("2026-06-15"),
      endDate: isoDate("2026-06-25"),
      tasks: de.experience.items[1]!.focus,
      visible: true,
      sortOrder: 2,
      descriptionDe: de.experience.items[1]!.description.de,
      descriptionEn: en.experience.items[1]!.description.en,
      typeDe: de.experience.items[1]!.type.de,
      typeEn: en.experience.items[1]!.type.en,
      status: "completed",
    },
    {
      _id: "experience-frutania",
      _type: "experience",
      company: "FRUTANIA GmbH",
      dateLabel: "Während der Realschulzeit",
      tasks: de.experience.items[2]!.focus,
      visible: true,
      sortOrder: 3,
      descriptionDe: de.experience.items[2]!.description.de,
      descriptionEn: en.experience.items[2]!.description.en,
      typeDe: de.experience.items[2]!.type.de,
      typeEn: en.experience.items[2]!.type.en,
      status: "completed",
    },
  ];

  const skillCategories = de.skills.categories.map((category, index) => ({
    _id: `skill-category-${index + 1}`,
    _type: "skillCategory",
    title: category.title,
    titleEn: en.skills.categories[index]?.title || category.title,
    skills: category.items.map((skill, skillIndex) => ({
      _key: `${index + 1}-${skillIndex + 1}`,
      name: skill.name,
      nameEn: en.skills.categories[index]?.items[skillIndex]?.name || skill.name,
      level: skill.level,
      levelEn: en.skills.categories[index]?.items[skillIndex]?.level || skill.level,
      confirmed: skill.visible,
      visible: skill.visible,
    })),
  }));

  const sanityProjects = projects.map((project) => ({
    _id: `project-${project.slug}`,
    _type: "project",
    titleDe: project.title.de,
    titleEn: project.title.en,
    slugDe: { _type: "slug", current: project.slug },
    slugEn: { _type: "slug", current: project.slug },
    status: project.status,
    shortDescriptionDe: project.shortDescription.de,
    shortDescriptionEn: project.shortDescription.en,
    descriptionDe: project.description.de,
    descriptionEn: project.description.en,
    technologies: project.technologies,
    repositoryUrl: project.repositoryUrl,
    demoUrl: project.demoUrl,
    featured: project.featured,
    visible: true,
    workingDe: project.working.de,
    workingEn: project.working.en,
    learningDe: project.learning.de,
    learningEn: project.learning.en,
    currentDe: project.current.de,
    currentEn: project.current.en,
    limitationsDe: project.limitations.de,
    limitationsEn: project.limitations.en,
    nextStepsDe: project.nextSteps.de,
    nextStepsEn: project.nextSteps.en,
  }));

  return [
    {
      _id: "site-settings",
      _type: "siteSettings",
      name: "Noah Neu",
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      emailLocalPart: "neu.noah",
      emailDomain: "web.de",
      githubUrl: "https://github.com/NeuNoah",
      linkedinUrl: "https://de.linkedin.com/in/neu-noah",
      qualificationNeedsConfirmation: true,
    },
    {
      _id: "profile",
      _type: "profile",
      heroDe: de.hero.intro,
      heroEn: en.hero.intro,
      heroDetailDe: de.hero.detail,
      heroDetailEn: en.hero.detail,
      aboutDe: de.about.body,
      aboutEn: en.about.body,
      aboutQuoteDe: de.about.quote,
      aboutQuoteEn: en.about.quote,
      showProfilePhoto: false,
    },
    ...experiences,
    ...skillCategories,
    ...sanityProjects,
  ];
};

async function main() {
  if (!client) {
    console.log("Sanity seed skipped: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN are required.");
    return;
  }

  const result = await Promise.all(documents().map((document) => client.createOrReplace(document as never)));
  console.log(`Sanity seed complete: ${result.length} documents written to ${projectId}/${dataset}.`);
}

void main();
