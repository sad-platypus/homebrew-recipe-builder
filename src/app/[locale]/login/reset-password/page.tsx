import { ResetPassword } from '@/features/auth/components/reset-password';
import { pick } from 'lodash';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { resetPassword } from '@/features/auth/actions';

export default function ResetPasswordPage() {
  const translations = useMessages();
  return (
    <NextIntlClientProvider messages={pick(translations, 'auth.reset-password')}>
      <ResetPassword handleReset={resetPassword} />
    </NextIntlClientProvider>
  );
}
