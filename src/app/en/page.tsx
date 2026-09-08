import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HomeSections } from "@/components/sections/PortfolioSections";
import { getPortfolioContent, getPortfolioProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Noah Neu | IT apprenticeship from 2027",
  description:
    "Noah Neu is looking for an IT specialist apprenticeship from August 2027, open to systems integration and application development.",
  alternates: { canonical: "/en", languages: { de: "/", en: "/en" } },
};

export default async function EnglishHomePage() {
  const [content, project] = await Promise.all([getPortfolioContent("en"), getPortfolioProject("privacy-oriented-rust-browser")]);
  if (!project) throw new Error("Featured project is missing");
  return (
    <>
      <Header locale="en" content={content} />
      <main>
        <HomeSections locale="en" content={content} project={project} />
      </main>
      <Footer locale="en" content={content} />
    </>
  );
}
