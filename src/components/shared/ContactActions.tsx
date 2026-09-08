"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { emailHref, reconstructEmail } from "@/lib/email";

export function ContactActions({ writeLabel, copyLabel, copiedLabel }: { writeLabel: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  async function copyEmail() {
    const email = reconstructEmail();

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(email);
    } catch {
      // Some browsers block the async Clipboard API until the user grants
      // permission. Keep the button useful with a short-lived text fallback.
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand("copy");
      textarea.remove();

      if (!copied) {
        return;
      }
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }
  return (
    <div className="contact-actions">
      <a className="button button-primary" href={mounted ? emailHref() : undefined}>
        <Mail size={16} aria-hidden="true" />
        {writeLabel}
      </a>
      <button className="button button-secondary" type="button" onClick={copyEmail}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? copiedLabel : copyLabel}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}
