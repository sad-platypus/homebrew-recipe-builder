import { Card } from '@/components/wrappers';
import { UpdatePasswordForm } from './';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { pick } from 'lodash';
import { createClient } from '@/utils/supabase/server';

export const UpdatePassword = () => {
  const t = useTranslations('auth.update-password')
  const translations = useMessages();

   const updatePassword = async (newPassword: string) => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (data) {
      console.log('success!');
    } else if (error) {
      console.log(error.message);
    }
  };

  return (
    <Card title="set new password">
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <UpdatePasswordForm />
      </NextIntlClientProvider>
    </Card>
  );
};
