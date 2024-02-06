import { Link } from '@/navigation';
import styles from './login-button.module.scss';

export const LoginButton = () => {
  return (
    <Link className={styles.link} href="/login">
      <div className={styles.loginButton}>PLACEHOLDER</div>
    </Link>
  );
};
