import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalPage } from "@/components/shared/LegalPage";
import { getPortfolioContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/privacy", languages: { de: "/datenschutz", en: "/en/privacy" } },
};
export default async function EnglishPrivacyPage() {
  const content = await getPortfolioContent("en");
  return (
    <>
      <Header locale="en" content={content} />
      <LegalPage content={content} type="privacy" />
      <Footer locale="en" content={content} />
    </>
  );
}
