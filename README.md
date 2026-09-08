# Noah Neu · Portfolio

[![Quality checks](https://github.com/NeuNoah/noahneu-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/NeuNoah/noahneu-portfolio/actions/workflows/ci.yml)
[![Live website](https://img.shields.io/badge/live-noahneu--portfolio.vercel.app-111111?logo=vercel&logoColor=white)](https://noahneu-portfolio.vercel.app)

Eine ruhige, monochrome und zweisprachige Portfolio-Website für Noah Neu. Sie unterstützt die Suche nach einer Ausbildung zum Fachinformatiker ab dem 1. August 2027 und zeigt erste IT-Praxis, Lernfelder und das Rust-Browserprojekt ehrlich.

## Verwendeter Stand

- Node.js 24 LTS (lokal getestet: 24.19.0)
- pnpm 11.19.0
- Next.js 16.3.4 mit App Router und React Server Components
- React 19.2.8
- TypeScript 5.9.3 mit strikten Optionen
- Tailwind CSS 4.3.3
- Sanity 6.12.0 und next-sanity 13.3.4 (Studio vorbereitet)
- next-intl 4.14.2, next-themes 0.4.6, Lucide React 0.468.0
- Vitest 3.2.6, React Testing Library, Playwright 1.57.0 und axe-core

## Lokal starten

1. Node.js 24 LTS installieren.
2. pnpm aktivieren oder die mitgelieferte pnpm-Version verwenden.
3. Dieses Verzeichnis öffnen.
4. `.env.example` nach `.env.local` kopieren. Für die Fallback-Inhalte dürfen die Sanity-Werte leer bleiben.
5. `pnpm install --frozen-lockfile` ausführen.
6. Mit `pnpm dev` starten und [http://localhost:3000](http://localhost:3000) öffnen.

Die Website funktioniert auch ohne externe Dienste. Wenn `NEXT_PUBLIC_SANITY_PROJECT_ID` gesetzt ist, werden Profil-, Praxis-, Fähigkeiten- und Projektdaten aus Sanity gelesen; bei fehlender Verbindung fällt die Website automatisch auf `src/content/site-data.ts` zurück.

## Inhalte bearbeiten

Die lokale Inhaltsquelle ist streng typisiert. Sanity steht unter `/studio` als redaktionelles Dashboard bereit. Dafür `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` und `NEXT_PUBLIC_SANITY_API_VERSION` setzen und den angemeldeten Nutzer im Sanity-Projekt einladen. Tokens bleiben serverseitig und gehören nicht ins Repository.

`pnpm sanity:seed` prüft die Zugangsdaten und erinnert an das Mapping des Fallback-Datensatzes. Vor dem ersten echten Import die öffentlichen Inhalte kontrollieren.

## Qualitätsskripte

```text
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm test:e2e
pnpm test:a11y
pnpm sanity:typegen
pnpm sanity:seed
pnpm validate
```

`pnpm validate` führt Formatprüfung, ESLint, TypeScript, Unit-Tests und den Produktions-Build aus.

## Datenschutz und rechtliche Vorbereitung

Die E-Mail wird im Browser aus getrennten Teilen zusammengesetzt. Diese einfache Verschleierung ist kein vollständiger Spamschutz. Es gibt kein Tracking, keine Analyse-Tools, kein Kontaktformular, keine Telefonnummer und keine Dokument-Downloads. Impressum und Datenschutz sind bewusst auf `noindex` gesetzt, solange Pflichtangaben fehlen. Vor Veröffentlichung bitte Anschrift, rechtliche Texte und Minderjährigenschutz prüfen lassen.

## Deployment auf Vercel

Das Repository ist mit Vercel verbunden. Jeder Push auf `main` löst nach den GitHub-Qualitätsprüfungen automatisch ein Vercel-Deployment aus.

1. Die Werte aus `.env.example` in den Vercel-Projekteinstellungen setzen. Ein Write-Token wird nur für lokale Seeds benötigt.
2. Vorschau-Deployment öffnen und deutsche/englische Routen, Theme-Umschalter, E-Mail-Aktionen und mobile Navigation prüfen.
3. Für `noahneu.dev` die Domain in Vercel hinterlegen, die von Vercel angezeigten DNS-Einträge beim Domainanbieter setzen, HTTPS abwarten und `NEXT_PUBLIC_SITE_URL=https://noahneu.dev` aktualisieren.
4. Sitemap, Canonical URLs und Open-Graph-Daten nach dem ersten echten Deployment prüfen.

## GitHub-Workflow

Pull Requests nach `main` führen automatisch Formatprüfung, ESLint, TypeScript, Tests und den Produktions-Build aus. Die Workflow-Datei verwendet Node.js 24, minimale Leserechte, immutable Action-Versionen und bricht veraltete parallele Läufe ab. CodeQL und Dependency Review ergänzen die Sicherheitsprüfungen. Dependabot prüft npm- und GitHub-Actions-Abhängigkeiten wöchentlich.

Der `main`-Branch ist geschützt: Änderungen laufen über Pull Requests, müssen `validate` bestehen und dürfen weder per Force-Push überschrieben noch gelöscht werden. Sicherheitsmeldungen stehen in [SECURITY.md](SECURITY.md).

## Offene Punkte

- [ ] Exakte Bezeichnung des aktuellen Bildungsgangs bestätigen
- [ ] Genaues Datum des FRUTANIA-Praktikums ergänzen
- [ ] Einzelne Praktikumsaufgaben noch einmal bestätigen
- [ ] Python-Kenntnisstand festlegen
- [ ] GitHub-Profilbeschreibung ergänzen
- [ ] LinkedIn-Profil vervollständigen
- [ ] Browserprojekt später auf GitHub veröffentlichen
- [ ] Echten Screenshot der Browseroberfläche ergänzen
- [ ] Professionelles Profilfoto optional ergänzen
- [ ] Domain `noahneu.dev` prüfen und gegebenenfalls kaufen
- [ ] Sanity-Projekt erstellen
- [ ] Sanity-Umgebungsvariablen eintragen
- [ ] Deutsche Inhalte prüfen
- [ ] Englische Übersetzungen prüfen
- [ ] Impressum vervollständigen und prüfen
- [ ] Datenschutzerklärung vervollständigen und prüfen
- [ ] E-Mail-Verschleierung testen
- [ ] Mobile Darstellung testen
- [ ] Performance-Check nach Deployment ausführen
- [ ] Alle öffentlichen Inhalte auf private Angaben prüfen
