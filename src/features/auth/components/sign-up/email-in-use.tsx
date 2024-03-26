
import { Button, P } from '@/components/elements';
import { Card } from '@/components/wrappers';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export const EmailInUse = () => {
  const t = useTranslations('auth.email-in-use');


  return (
    <Card title={t('title')}>
      <P>{t('message')}</P>
      <Link href={'/login'}>
        <Button>{t('button')}</Button>
      </Link>
    </Card>
  );
};
