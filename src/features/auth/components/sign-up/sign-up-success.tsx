import { P } from '@/components/elements';
import { Card } from '@/components/wrappers';
import { useTranslations } from 'next-intl';

export const SignUpSuccess = () => {
  const t = useTranslations('auth.sign-up-success');
  return (
    <div>
      <Card title={t('title')}>
        <P>{t('message')}</P>
      </Card>
    </div>
  );
};
