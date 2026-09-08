import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as "de" | "en") ? (requested as "de" | "en") : routing.defaultLocale;
  return { locale, messages: {} };
});
