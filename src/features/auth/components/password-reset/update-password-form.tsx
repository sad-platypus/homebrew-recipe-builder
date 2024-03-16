'use client';

import { Form, InputField } from '@/components/form';
import { useUpdatePasswordSchema } from '../../hooks/use-update-password-schema';
import { FieldValues } from 'react-hook-form';
import { Button } from '@/components/elements';


export const UpdatePasswordForm = () => {
  
  const handleSubmit = (data: FieldValues) => {
    updatePassword(data.updatedPassword);
  };
  const schema = useUpdatePasswordSchema();

  return (
      <Form
        schema={schema}
        id="updatePasswordForm"
        onSubmit={handleSubmit}
      >
        <InputField
          name="updatedPassword"
          label="new password"
        />
        <InputField
          name="updatedPasswordConfirm"
          label="confirm password"
        />
        <Button type="submit">Submit</Button>
      </Form>
  );
};
