'use client';

import { createClient } from '@/utils/supabase/client';
import styles from './auth-button.module.scss';
import { useTranslations } from 'next-intl';
import { useUser } from '../hooks';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export const AuthButton = () => {
  const t = useTranslations('sidebar.login');
  const supabase = createClient();
  const user = useUser();

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return user ? (
    <div
      onClick={logout}
      className={`${roboto.className} ${styles.googleButton} ${styles.logout}`}
    >
      {t('sign-out')}
    </div>
  ) : (
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
      />
      {t('sign-in')}
    </div>
  );
};
