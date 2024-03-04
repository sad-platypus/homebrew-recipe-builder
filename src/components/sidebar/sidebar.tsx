'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { BurgerMenu } from './burger-menu';
import { LangueageSwitcher } from './language-switcher';
import { LinkList } from './link-list';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';
import { motion } from 'framer-motion';
import { AuthButton } from '@/features/auth';

export const Sidebar = () => {
  const t = useTranslations('sidebar');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.sidebar}
      transition={{ duration: 0.4 }}
    >
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
        <LinkList  />
        <div className={styles.switchers}>
          <AuthButton />
          <ThemeSwitcher />
          <LangueageSwitcher />
        </div>
      </div>
      <div className={styles.mobileWrapper}>
        <BurgerMenu />
      </div>
    </motion.div>
  );
};
