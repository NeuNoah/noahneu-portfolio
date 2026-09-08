export type InternshipStatus = "planned" | "ongoing" | "completed";

export function getInternshipStatus(start: string, end: string, now = new Date()): InternshipStatus {
  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T23:59:59Z`);
  if (now < startDate) return "planned";
  if (now > endDate) return "completed";
  return "ongoing";
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
