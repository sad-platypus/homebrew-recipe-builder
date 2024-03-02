'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { BurgerMenu } from './burger-menu';
import { LangueageSwitcher } from './language-switcher';
import { LinkList } from './link-list';
import { LoginButton } from './login-button';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

export const Sidebar = () => {
  const t = useTranslations('sidebar');
  return (
    <div className={styles.sidebar}>
      <Link
        className={styles.link}
        href="/"
      >
        <Image
          priority={true}
          className={styles.image}
          src="/logo.PNG"
          alt={t('image')}
          width="200"
          height="200"
        />
      </Link>
      <div className={styles.desktopWrapper}>
        <LinkList />
        <div>
          <ThemeSwitcher />
          <LangueageSwitcher />
          <LoginButton />
        </div>
      </div>
      <div className={styles.mobileWrapper}>
        <BurgerMenu />
      </div>
    </div>
  );
};
