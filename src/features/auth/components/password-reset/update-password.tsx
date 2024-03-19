import { Card } from '@/components/wrappers';
import { UpdatePasswordForm } from './';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { pick } from 'lodash';
import { updatePassword } from '../../actions/update-password';

export const UpdatePassword = () => {
  const t = useTranslations('auth.update-password');
  const translations = useMessages();

  return (
    <Card title={t('set-new-pass')}>
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <UpdatePasswordForm handleUpdate={updatePassword}/>
      </NextIntlClientProvider>
    </Card>
  );
};
