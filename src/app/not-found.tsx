import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <span className="eyebrow">404 / Nicht gefunden</span>
      <h1>Diese Seite gibt es nicht.</h1>
      <p>Zurück zum Portfolio?</p>
      <Link className="button button-primary" href="/">
        Startseite ansehen
      </Link>
    </main>
  );
}
