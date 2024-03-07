import styles from './theme-switcher.module.scss';
import { motion } from 'framer-motion';
import { P } from '../../elements';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const t = useTranslations('sidebar');
  const { resolvedTheme, setTheme } = useTheme();
  const darkTheme = resolvedTheme === 'dark';

  const toggleTheme = () => (darkTheme ? setTheme('light') : setTheme('dark'));
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
