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
    title: project.title.de,
    description: project.shortDescription.de,
    alternates: { canonical: `/projekte/${slug}`, languages: { de: `/projekte/${slug}`, en: `/en/projects/${slug}` } },
  };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const [content, project] = await Promise.all([getPortfolioContent("de"), getPortfolioProject(slug)]);
  if (!project) notFound();
  return (
    <>
      <Header locale="de" content={content} />
      <ProjectPage locale="de" content={content} project={project} />
      <Footer locale="de" content={content} />
    </>
  );
}
