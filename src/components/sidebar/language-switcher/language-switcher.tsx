'use client';

import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import styles from './language-switcher.module.scss';

export const LangueageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <select
        value={locale}
        onChange={(e) => handleChange(e)}
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};
