'use client';

import { Form } from '@/components/form/form';
import { InputField } from '@/components/form/input-field/input-field';
import { Fragment } from 'react';
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
    <Fragment>
      <h2>Carbonation levels</h2>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
      >
        <InputField
          label="test"
          name="test"
        />
        <InputField
          label="also test"
          name="test2"
        />
      </Form>
    </Fragment>
  );
};
