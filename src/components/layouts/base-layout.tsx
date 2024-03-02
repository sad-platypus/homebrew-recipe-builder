import styles from './base-layout.module.scss';
import { Sidebar } from '@/components/sidebar';
import { ReactNode } from 'react';
import { pick } from 'lodash';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function BaseLayout({ children }: { children: ReactNode }) {
  const translations = useMessages();

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}/>
      <NextIntlClientProvider
        messages={pick(translations, 'link-list', 'sidebar', 'login')}
      >
        <Sidebar />
      </NextIntlClientProvider>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
