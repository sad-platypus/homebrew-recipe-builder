import { EmailInUse } from '@/features/auth/components/sign-up';
import { pick } from 'lodash';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function EmailInUsePage() {
  const translations = useMessages();
  return (
    <NextIntlClientProvider messages={pick(translations, 'auth')}>
      <EmailInUse />
    </NextIntlClientProvider>
  );
}
