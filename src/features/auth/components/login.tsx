import { Card } from '@/components/wrappers';
import { GoogleOAuthButton } from './google-auth-button';
import styles from './login.module.scss';
import { SignUpForm } from './sign-up';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { pick } from 'lodash';
import { SignInForm } from './sign-in-form';
import { Button } from '@/components/elements';
import { Link, redirect } from '@/navigation';

export const Login = () => {
  const t = useTranslations('auth');
  const translations = useMessages();

  return (
    <div className={styles.wrapper}>
      <NextIntlClientProvider messages={pick(translations, 'auth')}>
        <Card
          style={styles.card}
          headerStyle={styles.header}
          title={t('sign-in-title')}
        >
          <SignInForm />
          <GoogleOAuthButton />

          <Link href="/login/reset-password">{t('forgot-password')}</Link>
        </Card>

        <Card
          style={styles.card}
          headerStyle={styles.header}
          title={t('sign-up-title')}
        >
          <SignUpForm />
        </Card>
      </NextIntlClientProvider>
    </div>
  );
};
