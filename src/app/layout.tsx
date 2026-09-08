import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://noahneu.dev"),
  title: { default: "Noah Neu | Ausbildung zum Fachinformatiker ab 2027", template: "%s | Noah Neu" },
  description:
    "Noah Neu aus Bad Neuenahr-Ahrweiler sucht ab August 2027 eine Ausbildung zum Fachinformatiker für Systemintegration oder Anwendungsentwicklung.",
  alternates: { canonical: "/", languages: { de: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    siteName: "Noah Neu",
    title: "Noah Neu | Ausbildung zum Fachinformatiker ab 2027",
    description: "Portfolio von Noah Neu – Fachabitur Informatik, erste IT-Praxis und ein Rust-Browser als Lernprojekt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Neu | Ausbildung zum Fachinformatiker ab 2027",
    description: "Portfolio von Noah Neu – Fachabitur Informatik, erste IT-Praxis und ein Rust-Browser als Lernprojekt.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f1" },
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
