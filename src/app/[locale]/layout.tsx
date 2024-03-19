import { Lato } from 'next/font/google';
import '../globals.scss';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/navigation';
import BaseLayout from '@/components/layouts/base-layout';
import { Providers } from '@/utils/providers/providers';
import { createClient } from '@/utils/supabase/server';

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

  // const supabase = createClient()

  // supabase.auth.onAuthStateChange((event, session) => {
  //   if (event === 'SIGNED_OUT') {
  //     const expires = new Date(0).toUTCString()
  //     document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
  //     document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
  //   } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
  //     const maxAge = 100 * 365 * 24 * 60 * 60 
  //     document.cookie = `my-access-token=${session?.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  //     document.cookie = `my-refresh-token=${session?.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  //   }
  // })

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
