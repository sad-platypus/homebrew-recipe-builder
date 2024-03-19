'use client';

import { useTranslations } from 'next-intl';
import styles from './sign-in-form.module.scss';
import { Form, InputField } from '@/components/form';
import { useSignInSchema } from '../../hooks';
import { Button } from '@/components/elements';
import { FieldValues } from 'react-hook-form';
import { useAuthContext } from '@/utils/contexts/auth-context';


export const SignInForm = () => {
  const t = useTranslations('auth.sign-in');
  const schema = useSignInSchema();
  const { handleLogin } = useAuthContext();


  const handleSubmit = (data: FieldValues) => {
    handleLogin(data);
  };

  return (
    <Form
      schema={schema}
      id="signInForm"
      onSubmit={handleSubmit}
      style={styles.form}
    >
      <InputField
        name="signInEmail"
        label={t('email')}
      />
      <InputField
        name="signInPassword"
        label={t('password')}
        type="password"
      />
      <Button type="submit">{t('submit')}</Button>
    </Form>
  );
};
