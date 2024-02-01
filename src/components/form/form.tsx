'use client';

import { ReactNode, FC, PropsWithChildren } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Schema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.css';

type FormProps = {
  className?: string;
  onSubmit?: SubmitHandler<FieldValues>;
  schema: Schema;
};
export const Form = ({
  children,
  className,
  schema,
  onSubmit,
}: PropsWithChildren<FormProps>) => {
  const methods = useForm({ resolver: zodResolver(schema) });

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitHandler)}
        className={`${styles.form} ${className || ''}`}
      >
        {children}
        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
};
