'use client';

import { Form, InputField } from '@/components/form';
import { FieldValues } from 'react-hook-form';
import { useResetPasswordSchema } from '../../hooks/use-reset-password-schema';
import { useTranslations } from 'next-intl';
import { Button, P } from '@/components/elements';
import { Fragment, useState } from 'react';
import { Card } from '@/components/wrappers';

type ResetPasswordProps = {
  handleReset: (email: string) => Promise<void>;
};

export const ResetPassword = ({ handleReset }: ResetPasswordProps) => {
  const t = useTranslations('auth.reset-password');
  const schema = useResetPasswordSchema();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (formData: FieldValues) => {
    try {
      await handleReset(formData.resetPasswordEmail);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card title={t('title')}>
      {submitted ? (
        <P>{t('message-submitted')}</P>
      ) : (
        <Fragment>
          <P>{t('message-initial')}</P>
          <Form
            id="resetPasswordForm"
            onSubmit={handleSubmit}
            schema={schema}
          >
            <InputField
              name="resetPasswordEmail"
              label={t('email')}
            />
            <Button type="submit">{t('submit')}</Button>
          </Form>
        </Fragment>
      )}
    </Card>
  );
};
