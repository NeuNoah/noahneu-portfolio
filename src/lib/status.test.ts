import { describe, expect, it } from "vitest";
import { getInternshipStatus } from "@/lib/status";

describe("getInternshipStatus", () => {
  it("returns planned before the start date", () =>
    expect(getInternshipStatus("2026-08-10", "2027-06-22", new Date("2026-07-01T12:00:00Z"))).toBe("planned"));
  it("returns ongoing during the placement", () =>
    expect(getInternshipStatus("2026-08-10", "2027-06-22", new Date("2026-09-01T12:00:00Z"))).toBe("ongoing"));
  it("returns completed after the end date", () =>
    expect(getInternshipStatus("2026-08-10", "2027-06-22", new Date("2027-07-01T12:00:00Z"))).toBe("completed"));
});
