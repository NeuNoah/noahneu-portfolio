import { defineConfig, defineField, defineType } from "sanity";
import { structureTool } from "sanity/structure";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "siteUrl", title: "Site URL", type: "url" }),
    defineField({ name: "emailLocalPart", title: "Email local part", type: "string" }),
    defineField({ name: "emailDomain", title: "Email domain", type: "string" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "qualificationNeedsConfirmation", title: "Qualification needs confirmation", type: "boolean", initialValue: true }),
  ],
});
const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "heroDe", title: "Hero German", type: "text" }),
    defineField({ name: "heroEn", title: "Hero English", type: "text" }),
    defineField({ name: "heroDetailDe", title: "Hero detail German", type: "text" }),
    defineField({ name: "heroDetailEn", title: "Hero detail English", type: "text" }),
    defineField({ name: "aboutDe", title: "About German", type: "text" }),
    defineField({ name: "aboutEn", title: "About English", type: "text" }),
    defineField({ name: "aboutQuoteDe", title: "About quote German", type: "text" }),
    defineField({ name: "aboutQuoteEn", title: "About quote English", type: "text" }),
    defineField({ name: "showProfilePhoto", title: "Show profile photo", type: "boolean", initialValue: false }),
  ],
});
const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "institution", title: "Institution", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "date" }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({ name: "qualification", title: "Qualification", type: "string" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
    defineField({
      name: "qualificationNeedsConfirmation",
      title: "Qualification needs confirmation",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "dateLabel", title: "Date label", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "date" }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({ name: "tasks", title: "Confirmed tasks", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "typeDe", title: "Type German", type: "string" }),
    defineField({ name: "typeEn", title: "Type English", type: "string" }),
    defineField({ name: "descriptionDe", title: "Description German", type: "text" }),
    defineField({ name: "descriptionEn", title: "Description English", type: "text" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["completed", "ongoing"] } }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
  ],
});
const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "titleEn", title: "Title English", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "nameEn", title: "Name English", type: "string" }),
            defineField({ name: "level", title: "Level", type: "string" }),
            defineField({ name: "levelEn", title: "Level English", type: "string" }),
            defineField({ name: "confirmed", title: "Confirmed", type: "boolean", initialValue: false }),
            defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
          ],
        },
      ],
    }),
  ],
});
const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "titleDe", title: "Title German", type: "string" }),
    defineField({ name: "titleEn", title: "Title English", type: "string" }),
    defineField({ name: "slugDe", title: "German slug", type: "slug", options: { source: "titleDe" } }),
    defineField({ name: "slugEn", title: "English slug", type: "slug", options: { source: "titleEn" } }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["in-progress", "learning", "planned"] } }),
    defineField({ name: "descriptionDe", title: "Description German", type: "text" }),
    defineField({ name: "descriptionEn", title: "Description English", type: "text" }),
    defineField({ name: "shortDescriptionDe", title: "Short description German", type: "text" }),
    defineField({ name: "shortDescriptionEn", title: "Short description English", type: "text" }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "workingDe", title: "Working German", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "workingEn", title: "Working English", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "learningDe", title: "Learning German", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "learningEn", title: "Learning English", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "currentDe", title: "Current work German", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "currentEn", title: "Current work English", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "limitationsDe", title: "Limitations German", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "limitationsEn", title: "Limitations English", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "nextStepsDe", title: "Next steps German", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "nextStepsEn", title: "Next steps English", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "repositoryUrl", title: "Repository URL", type: "url" }),
    defineField({ name: "demoUrl", title: "Demo URL", type: "url" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
  ],
});
const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "issuer", title: "Issuer", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: false }),
  ],
});
const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
  ],
});

export default defineConfig({
  name: "noahneu-portfolio",
  title: "Noah Neu Portfolio",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: [siteSettings, profile, education, experience, skillCategory, project, certificate, article] },
});
