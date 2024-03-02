import { ThemeContext } from '@/contexts/theme-context';
import { useContext, useEffect, useState } from 'react';
import styles from './theme-switcher.module.scss';
import { motion } from 'framer-motion';
import { P } from '../elements';
import { useTranslations } from 'next-intl';

export const ThemeSwitcher = () => {
  const t = useTranslations('sidebar');
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(true);
  const toggleSwitch = () => setIsOn(!isOn);
  const handleClick = () => {
    toggleTheme();
    toggleSwitch();
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkTheme ? 'dark' : 'light'
    );
  }, [darkTheme]);

  return (
    <div className={styles.wrapper}>
      <P className={styles.text}>{darkTheme ? t('darkmode'): t('lightmode')}</P>
      <div
        className={styles.switch}
        data-isOn={isOn}
        onClick={handleClick}
      >
        <motion.div
          data-isOn={isOn}
          className={styles.handle}
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
};
