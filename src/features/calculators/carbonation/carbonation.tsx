'use client';

import { Form } from '@/components/form/form';
import { InputField } from '@/components/form/input-field/input-field';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  test: z.string().min(4, 'too short').max(10, 'too long'),
  test2: z.string().min(4, 'too short').max(10, 'too long'),
});

export const Carbonation = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Form
      schema={schema}
      onSubmit={handleSubmit}
    >
      <InputField name="test" />
      <InputField name="test2" />
    </Form>
  );
};
