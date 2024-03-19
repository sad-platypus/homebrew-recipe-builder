'use client';

import { browserClient } from '@/utils/supabase/client';
import styles from './auth-button.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import { useAuthContext } from '@/utils/contexts/auth-context';

export const AuthButton = () => {
  
  const t = useTranslations('sidebar.login');
  const supabase = browserClient;
  const { session } = useAuthContext();

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return session ? (
    <div
      onClick={logout}
      className={styles.authButton}
    >
      {t('sign-out')}
    </div>
  ) : (
    <div className={styles.authButton}>
      <Link
        className={styles.link}
        href={'/login'}
      >
        {' '}
        {t('sign-in')}
      </Link>
    </div>
  );
};
