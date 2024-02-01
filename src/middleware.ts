import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/navigation";
export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: localePrefix,
});

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
