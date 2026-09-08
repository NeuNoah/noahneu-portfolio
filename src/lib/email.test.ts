import { describe, expect, it } from "vitest";
import { emailHref, reconstructEmail } from "@/lib/email";

describe("email privacy helper", () => {
  it("reconstructs the address only in the browser helper", () => expect(reconstructEmail()).toBe("neu.noah@web.de"));
  it("encodes a useful subject", () => expect(emailHref()).toContain("Ausbildungsanfrage%20f%C3%BCr%202027"));
});
