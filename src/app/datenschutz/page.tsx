import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalPage } from "@/components/shared/LegalPage";
import { getPortfolioContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz", languages: { de: "/datenschutz", en: "/en/privacy" } },
};
export default async function PrivacyPage() {
  const content = await getPortfolioContent("de");
  return (
    <>
      <Header locale="de" content={content} />
      <LegalPage content={content} type="privacy" />
      <Footer locale="de" content={content} />
    </>
  );
}
