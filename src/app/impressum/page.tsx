import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalPage } from "@/components/shared/LegalPage";
import { getPortfolioContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum", languages: { de: "/impressum", en: "/en/legal-notice" } },
};
export default async function LegalNoticePage() {
  const content = await getPortfolioContent("de");
  return (
    <>
      <Header locale="de" content={content} />
      <LegalPage content={content} type="legal" />
      <Footer locale="de" content={content} />
    </>
  );
}
