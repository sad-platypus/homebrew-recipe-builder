'use client';

import { Form, InputField } from '@/components/form';
import { useUpdatePasswordSchema } from '../../hooks/use-update-password-schema';
import { FieldValues } from 'react-hook-form';
import { Button } from '@/components/elements';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

type UpdatePasswordFormProps = {
  handleUpdate: (password: string) => Promise<void>
}

export const UpdatePasswordForm = ({handleUpdate}: UpdatePasswordFormProps) => {
  const t = useTranslations('auth.update-password');

const schema = useUpdatePasswordSchema();

  const handleSubmit = async (data: FieldValues) => {
   await  handleUpdate(data.updatedPassword);
  };
  

  return (
    <Form
      schema={schema}
      id="updatePasswordForm"
      onSubmit={handleSubmit}
    >
      <InputField
        name="updatedPassword"
        label={t('new-password')}
      />
      <InputField
        name="updatedPasswordConfirm"
        label={t('new-password-confirm')}
      />
      <Button type="submit">{t('submit')}</Button>
    </Form>
  );
};
