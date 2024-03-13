'use client';

import { Button } from '@/components/elements';
import { Form, InputField } from '@/components/form';
import { useTranslations } from 'next-intl';
import { useSignUpSchema } from '../../hooks';
import styles from './sign-up-form.module.scss'
import { signUp } from '../../actions/sign-up';
import { FieldValues } from 'react-hook-form';

export const SignUpForm = () => {
  const onSubmit = (data : FieldValues) => {
    signUp(data);
  };
  const t = useTranslations('auth.sign-up');
  const schema = useSignUpSchema();
  return (
    <Form
      style={styles.form}
      schema={schema}
      id="signUpForm"
      onSubmit={onSubmit}
    >
      <InputField
        name="signUpEmail"
        label={t('email')}
      />
      <InputField
        type="password"
        name="signUpPassword"
        label={t('password')}
      />
      <InputField
        type="password"
        name="confirmSignUpPassword"
        label={t('confirm-password')}
      />
      <InputField name = 'signUpName' label={t('name')} />
      <Button type="submit">{t('submit')}</Button>
    </Form>
  );
};
