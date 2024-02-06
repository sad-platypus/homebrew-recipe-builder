import { useEffect, useRef, useState } from 'react';
import LinkList from '../link-list/link-list';
import styles from './burger-menu.module.scss';
import LangueageSwitcher from '@/components/language-switcher/language-switcher';
import { LoginButton } from '../login-button/login-button';

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
        id="menu-toggle"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(true)}
      />
      <label
        htmlFor="menu-toggle"
        className={styles.menuButton}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </label>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={styles.menuOpen}
        >
          <button onClick={() => setIsMenuOpen(false)}>X</button>
          <LinkList onLinkClick={handleMenuClick} />
          <LangueageSwitcher />
          <LoginButton />
        </div>
      )}
    </div>
  );
};
