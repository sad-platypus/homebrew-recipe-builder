import { Card } from '@/components/wrappers';
import { ResetPasswordForm } from '.';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { pick } from 'lodash';
import { resetPassword } from '../../actions';

export const ResetPassword = () => {
  const t = useTranslations('auth.reset-password');
  const translations = useMessages();

  return (
    <Card title={t('title')}>
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <ResetPasswordForm handleReset={resetPassword} />
      </NextIntlClientProvider>
    </Card>
  );
};
