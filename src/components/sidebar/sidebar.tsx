'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';
import {LinkList} from './link-list/link-list';
import {LangueageSwitcher} from '../language-switcher/language-switcher';
import { BurgerMenu } from './burger-menu/burger-menu';
import { LoginButton } from './login-button/login-button';
import { useTranslations } from 'next-intl';

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
