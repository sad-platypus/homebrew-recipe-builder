'use client';

import { Button } from '@/components/elements';
import { Form, InputField } from '@/components/form';
import { useTranslations } from 'next-intl';
import { useSignUpSchema } from '../../hooks';
import styles from './sign-up-form.module.scss';
import { signUp } from '../../actions';
import { FieldValues } from 'react-hook-form';
import { browserClient as supabase } from '@/utils/supabase/client';

export const SignUpForm = () => {
  const t = useTranslations('auth.sign-up');
  const schema = useSignUpSchema();

  const handleSubmit = async (formData: FieldValues) => {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('full_name', `${formData.signUpName}`);
    console.log(data);
    if (error) {
      console.log('name check error', error);
      return;
    } else if (data.length > 0) {
      alert(t('name-in-use'));
      return;
    }
    signUp(formData);
  };

  return (
    <Form
      style={styles.form}
      schema={schema}
      id="signUpForm"
      onSubmit={handleSubmit}
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
      <InputField
        name="signUpName"
        label={t('name')}
      />
      <Button type="submit">{t('submit')}</Button>
    </Form>
  );
};
