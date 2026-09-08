import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalPage } from "@/components/shared/LegalPage";
import { getPortfolioContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/legal-notice", languages: { de: "/impressum", en: "/en/legal-notice" } },
};
export default async function EnglishLegalNoticePage() {
  const content = await getPortfolioContent("en");
  return (
    <>
      <Header locale="en" content={content} />
      <LegalPage content={content} type="legal" />
      <Footer locale="en" content={content} />
    </>
  );
}
