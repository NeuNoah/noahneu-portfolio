"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle({ label }: { label: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) return <span className="theme-toggle-placeholder" aria-hidden="true" />;

  // Use the persisted preference here, not `resolvedTheme`. `resolvedTheme`
  // turns a system preference into light/dark, which made the first click a
  // no-op whenever the OS was using dark mode.
  const current = theme ?? "system";
  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Laptop;
  const nextTheme = current === "light" ? "dark" : current === "dark" ? "system" : "light";
  const nextLabel = nextTheme === "light" ? "Light mode" : nextTheme === "dark" ? "Dark mode" : "System mode";

  return (
    <button
      className="icon-button"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`${label}: ${nextLabel}`}
      title={`${label}: ${nextLabel}`}
    >
      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </button>
  );
}
