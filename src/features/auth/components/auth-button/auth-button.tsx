'use client';

import { createClient } from '@/utils/supabase/client';
import styles from './auth-button.module.scss';
import { useTranslations } from 'next-intl';
import { useSession } from '../../hooks';
import { Link } from '@/navigation';

export const AuthButton = () => {
  const t = useTranslations('sidebar.login');
  const supabase = createClient();
  const session = useSession();

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
      <Link className={styles.link} href={'/login'}> {t('sign-in')}</Link>
    </div>
  );
};
