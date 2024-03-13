'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import styles from './google-auth-button.module.scss';
import { createClient } from '@/utils/supabase/client';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '500', display: 'swap' });

export const GoogleAuthButton = () => {
  //   const t = useTranslations('auth');
  const supabase = createClient();
  const locale = useLocale();

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://localhost:3000/auth/callback?next=/${locale}/my-profile`,
      },
    });
  };

  return (
    <div
      className={`${roboto.className} ${styles.googleButton}`}
      onClick={loginWithGoogle}
    >
      <Image
        className={styles.logo}
        width={20}
        height={20}
        src="/google-icon.png"
        alt="google icon"
      />{' '}
      login with google placeholder
      {/* {t('google-login')} */}
    </div>
  );
};
