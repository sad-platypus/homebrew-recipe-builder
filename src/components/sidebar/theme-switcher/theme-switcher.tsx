import { ThemeContext } from '@/utils/contexts/theme-context';
import { useContext, useEffect, useState } from 'react';
import styles from './theme-switcher.module.scss';
import { motion } from 'framer-motion';
import { P } from '../../elements';
import { useTranslations } from 'next-intl';

export const ThemeSwitcher = () => {
  const t = useTranslations('sidebar');
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkTheme ? 'dark' : 'light'
    );
    darkTheme ? setIsOn(true) : setIsOn(false);
  }, [darkTheme]);

  return (
    <div className={styles.wrapper}>
      <P className={styles.text}>
        {darkTheme ? t('darkmode') : t('lightmode')}
      </P>
      <div
        className={styles.switch}
        data-is-on={isOn}
        onClick={toggleTheme}
      >
        <motion.div
          className={styles.handle}
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
};
