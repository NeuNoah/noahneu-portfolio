"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import type { Locale, PortfolioContent } from "@/content/site-data";

type HeaderProps = { locale: Locale; content: PortfolioContent };

function localePath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path}` : path || "/";
}

function homeAnchor(locale: Locale, hash: string, isHome: boolean): string {
  if (isHome) return hash;
  return locale === "en" ? `/en${hash}` : `/${hash}`;
}

export function Header({ locale, content }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/en";
  const links = [
    { href: homeAnchor(locale, "#about", isHome), label: content.nav.about },
    { href: homeAnchor(locale, "#experience", isHome), label: content.nav.experience },
    { href: homeAnchor(locale, "#skills", isHome), label: content.nav.skills },
    { href: localePath(locale, locale === "en" ? "/projects" : "/projekte"), label: content.nav.projects },
    { href: homeAnchor(locale, "#contact", isHome), label: content.nav.contact },
  ];
  const languagePath =
    locale === "de"
      ? pathname === "/"
        ? "/en"
        : pathname === "/projekte"
          ? "/en/projects"
          : pathname.startsWith("/projekte/")
            ? pathname.replace("/projekte/", "/en/projects/")
            : pathname === "/impressum"
              ? "/en/legal-notice"
              : pathname === "/datenschutz"
                ? "/en/privacy"
                : "/en"
      : pathname === "/en"
        ? "/"
        : pathname === "/en/projects"
          ? "/projekte"
          : pathname.startsWith("/en/projects/")
            ? pathname.replace("/en/projects/", "/projekte/")
            : pathname === "/en/legal-notice"
              ? "/impressum"
              : pathname === "/en/privacy"
                ? "/datenschutz"
                : "/";

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={localePath(locale, "")} aria-label="Noah Neu">
          <span className="monogram" aria-hidden="true">
            NN
          </span>
          <span className="brand-copy">
            <strong>Noah Neu</strong>
            <span>IT · Ausbildung 2027</span>
          </span>
        </Link>
        <nav className={`desktop-nav ${open ? "is-hidden-mobile" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            className="language-switch"
            href={languagePath}
            aria-label={`${content.nav.language}: ${locale === "de" ? "English" : "Deutsch"}`}
          >
            {locale === "de" ? "EN" : "DE"}
          </Link>
          <ThemeToggle label={content.nav.theme} />
          <Link className="header-contact" href={homeAnchor(locale, "#contact", isHome)}>
            <span>{content.nav.contact}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? content.nav.closeMenu : content.nav.menu}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {link.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
