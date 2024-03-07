import { Lato } from 'next/font/google';
import '../globals.scss';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/navigation';
import BaseLayout from '@/components/layouts/base-layout';
import { Providers } from '@/utils/providers/providers';

const fontLato = Lato({ subsets: ['latin-ext'], weight: '400' });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
      <body className={fontLato.className}>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
