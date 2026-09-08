"use client";

import "./globals.css";

export default function GlobalErrorPage() {
  return (
    <html lang="de">
      <body>
        <main className="page-shell">
          <span className="eyebrow">500 / Global error</span>
          <h1>Die Seite konnte nicht geladen werden.</h1>
          <p>Bitte versuche es später erneut.</p>
        </main>
      </body>
    </html>
  );
}
