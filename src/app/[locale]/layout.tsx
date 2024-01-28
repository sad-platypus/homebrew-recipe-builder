import { Lato } from "next/font/google";
import "../globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import BaseLayout from "@components/layouts/base-layout";

const fontLato = Lato({ subsets: ["latin-ext"], weight: "400" });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100"
        rel="stylesheet"
      />
      ;
      <body className={fontLato.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
