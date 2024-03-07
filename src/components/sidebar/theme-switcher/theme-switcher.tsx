import {  ThemeContext } from '@/utils/contexts/theme-context';
import { useContext} from 'react';
import styles from './theme-switcher.module.scss';
import { motion } from 'framer-motion';
import { P } from '../../elements';
import { useTranslations } from 'next-intl';

export const ThemeSwitcher = () => {
  const t = useTranslations('sidebar');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkTheme = theme === 'dark';


  return (
    <div className={styles.wrapper}>
      <P className={styles.text}>
        {darkTheme ? t('darkmode') : t('lightmode')}
      </P>
      <div
        className={`${styles.switch} ${darkTheme ? styles.isDarkmode : null}`}
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
