import { Card } from '@/components/wrappers';
import { ResetPasswordForm } from './';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { pick } from 'lodash';
import { resetPassword } from '../../actions/reset-password';

export const ResetPassword = () => {
  // const t = useTranslations('auth.reset-password');
  const translations = useMessages();

  return (
    <Card title="set new password">
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <ResetPasswordForm handleReset={resetPassword} />
      </NextIntlClientProvider>
    </Card>
  );
};
