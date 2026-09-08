import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HomeSections } from "@/components/sections/PortfolioSections";
import { getPortfolioContent, getPortfolioProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Noah Neu | Ausbildung zum Fachinformatiker ab 2027",
  alternates: { canonical: "/", languages: { de: "/", en: "/en" } },
};

export default async function HomePage() {
  const [content, project] = await Promise.all([getPortfolioContent("de"), getPortfolioProject("privacy-oriented-rust-browser")]);
  if (!project) throw new Error("Featured project is missing");
  return (
    <>
      <Header locale="de" content={content} />
      <main>
        <HomeSections locale="de" content={content} project={project} />
      </main>
      <Footer locale="de" content={content} />
    </>
  );
}
