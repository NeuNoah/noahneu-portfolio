import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectPage } from "@/components/projects/ProjectPage";
import { getPortfolioContent, getPortfolioProject, getPortfolioProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await getPortfolioProjects()).map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);
  if (!project) return {};
  return {
    title: project.title.en,
    description: project.shortDescription.en,
    alternates: { canonical: `/en/projects/${slug}`, languages: { de: `/projekte/${slug}`, en: `/en/projects/${slug}` } },
  };
}
export default async function EnglishProjectDetail({ params }: Props) {
  const { slug } = await params;
  const [content, project] = await Promise.all([getPortfolioContent("en"), getPortfolioProject(slug)]);
  if (!project) notFound();
  return (
    <>
      <Header locale="en" content={content} />
      <ProjectPage locale="en" content={content} project={project} />
      <Footer locale="en" content={content} />
    </>
  );
}
