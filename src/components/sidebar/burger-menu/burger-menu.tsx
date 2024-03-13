'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './burger-menu.module.scss';
import { LangueageSwitcher } from '../language-switcher';
import { LinkList } from '../link-list';
import { ThemeSwitcher } from '@/components/sidebar/theme-switcher/';
import { AuthButton } from '@/features/auth';
import { motion } from 'framer-motion';

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const menuElement = menuRef.current;
    if (menuElement && menuElement.contains(event.target as HTMLElement)) {
      return;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.menuContainer}>
      <input
        type="checkbox"
        id="menuToggle"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(true)}
      />
      <label
        htmlFor="menuToggle"
        className={styles.menuButton}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </label>
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, width: 0 }}
          animate={{ height: 'auto', opacity: 1, width: 'fit-content' }}
          transition={{ duration: 0.4 }}
          style={{ overflow: 'hidden' }}
          ref={menuRef}
          className={styles.menuOpen}
        >
          <button onClick={() => setIsMenuOpen(false)}>X</button>
          <LinkList onLinkClick={handleMenuClick} />
          <AuthButton />
          <ThemeSwitcher />
          <LangueageSwitcher />
        </motion.div>
      )}
    </div>
  );
};
