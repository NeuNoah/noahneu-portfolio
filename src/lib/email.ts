const emailParts = ["neu.noah", "web.de"] as const;

export function reconstructEmail(): string {
  return `${emailParts[0]}@${emailParts[1]}`;
}

export function emailHref(subject = "Ausbildungsanfrage für 2027"): string {
  return `mailto:${reconstructEmail()}?subject=${encodeURIComponent(subject)}`;
}
