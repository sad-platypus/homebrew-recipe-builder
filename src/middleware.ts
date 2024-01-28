import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/navigation";
export default createMiddleware({
  locales: ["en", "pl"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
