"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="page-shell">
      <span className="eyebrow">500 / Fehler</span>
      <h1>Etwas ist schiefgelaufen.</h1>
      <p>Bitte versuche es noch einmal.</p>
      <button className="button button-primary" type="button" onClick={reset}>
        Erneut versuchen
      </button>
    </main>
  );
}
