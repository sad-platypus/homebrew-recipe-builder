import { Link } from '@/navigation';
import styles from './login-button.module.scss';
import { useTranslations } from 'next-intl';

type LoginButtonProps = {
  onClick?: () => void;
};
export const LoginButton = ({ onClick }: LoginButtonProps) => {
  const t = useTranslations('login');
  return (
    <Link
      onClick={onClick}
      className={styles.link}
      href="/login"
    >
      <div className={styles.loginButton}>{t('button')}</div>
    </Link>
  );
};
