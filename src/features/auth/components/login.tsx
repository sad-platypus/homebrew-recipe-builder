import { Card } from '@/components/wrappers';
import { GoogleAuthButton } from './google-auth-button';
import styles from './login.module.scss';
import { SignUpForm } from './sign-up-form';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { pick } from 'lodash';

export const Login = () => {
  const t = useTranslations('auth')
  const translations = useMessages()

  return (
    <div className={styles.wrapper}>
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <Card
          style={styles.card}
          headerStyle={styles.header}
          title={t("sign-in-title")}
        >
          <GoogleAuthButton />
        </Card>

        <Card
          style={styles.card}
          headerStyle={styles.header}
          title={t("sign-up-title")}
        >
          <SignUpForm />
        </Card>
      </NextIntlClientProvider>
    </div>
  );
};
