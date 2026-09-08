"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";

const hasSanityConfig = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder" &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export function StudioClient() {
  if (!hasSanityConfig) {
    return (
      <main className="page-shell" aria-labelledby="studio-setup-title">
        <div className="section-heading">
          <span className="eyebrow">STUDIO</span>
          <h1 id="studio-setup-title">Dashboard noch nicht verbunden.</h1>
          <p>
            Die lokale Website läuft bereits mit den geprüften Fallback-Inhalten. Für das redaktionelle Dashboard muss noch ein
            Sanity-Projekt in <code>.env.local</code> hinterlegt werden.
          </p>
          <p>
            Setze <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> und <code>NEXT_PUBLIC_SANITY_DATASET</code>, starte den Entwicklungsserver neu
            und öffne diese Seite erneut.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
