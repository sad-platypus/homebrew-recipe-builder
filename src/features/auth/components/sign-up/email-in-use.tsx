'use client';

import { Button, P } from '@/components/elements';
import { Card } from '@/components/wrappers';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';

export const EmailInUse = () => {
  const t = useTranslations('auth.email-in-use');
  const router = useRouter();
  const onClick = () => {
    router.push('/login');
  };

  return (
    <Card title={t('title')}>
      <P>{t('message')}</P>
      <Button onClick={onClick}>{t('button')}</Button>
    </Card>
  );
};
