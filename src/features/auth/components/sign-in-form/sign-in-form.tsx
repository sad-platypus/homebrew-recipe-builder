'use client';

import { useTranslations } from 'next-intl';
import styles from './sign-in-form.module.scss';
import { Form, InputField } from '@/components/form';
import { useSignInSchema } from '../../hooks';
import { Button } from '@/components/elements';
import { FieldValues } from 'react-hook-form';
import { useAuthContext } from '@/utils/contexts/auth-context';
import { Fragment, useState } from 'react';

export const SignInForm = () => {
  const t = useTranslations('auth.sign-in');
  const schema = useSignInSchema();
  const { handleLogin } = useAuthContext();
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleSubmit = async (formData: FieldValues) => {
    const { data, error } = await handleLogin(formData);
    if (error && error.message === 'Invalid login credentials') {
      setInvalidCredentials(true);
      alert(t('invalid-credentials'));
    }
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
