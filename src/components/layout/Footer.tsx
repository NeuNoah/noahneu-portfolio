import Link from "next/link";
import { ArrowUp } from "lucide-react";
import type { Locale, PortfolioContent } from "@/content/site-data";

export function Footer({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  const legal = locale === "en" ? "/en/legal-notice" : "/impressum";
  const privacy = locale === "en" ? "/en/privacy" : "/datenschutz";
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <span className="footer-mark">NN</span>
          <p>Noah Neu · {content.footer.status}</p>
        </div>
        <div className="footer-links">
          <Link href={legal}>{content.footer.legal}</Link>
          <Link href={privacy}>{content.footer.privacy}</Link>
          <Link href="#top" className="back-top">
            {content.footer.top}
            <ArrowUp size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
