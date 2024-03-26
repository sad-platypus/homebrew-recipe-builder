import { updatePassword } from '@/features/auth/actions';
import { UpdatePassword } from '@/features/auth/components/update-password';
import { pick } from 'lodash';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function UpdatePasswordPage() {
  const translations = useMessages();
  return (
    <NextIntlClientProvider
      messages={pick(translations, 'auth.update-password')}
    >
      <UpdatePassword handleUpdate={updatePassword} />
    </NextIntlClientProvider>
  );
}
