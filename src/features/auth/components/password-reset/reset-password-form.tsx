'use client';

import { Form, InputField } from '@/components/form';
import { FieldValues } from 'react-hook-form';
import { useResetPasswordSchema } from '../../hooks/use-reset-password-schema';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/elements';

export const ResetPasswordForm = ({handleReset}) => {
  // const t = useTranslations('auth.reset-password');
  const schema = useResetPasswordSchema();

  const handleSubmit = async (data: FieldValues) => {
    try {
      await handleReset(data.resetPasswordEmail);
    } catch (error) {
      console.log(error);
    }
    console.log('click!');
  };

  return (
    <Form
      id="resetPasswordForm"
      onSubmit={handleSubmit}
      schema={schema}
    >
      <InputField
        name="resetPasswordEmail"
        label="email"
      />
      <Button type="submit">submit</Button>
    </Form>
  );
};
