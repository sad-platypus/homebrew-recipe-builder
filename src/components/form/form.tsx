'use client';

import { PropsWithChildren } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form';
import { Schema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.scss';

type FormProps = {
  className?: string;
  onSubmit: SubmitHandler<FieldValues>;
  schema: Schema;
  id: string;
  parentMethods?: UseFormReturn<FieldValues, any, undefined>;
  defaultValues?: FieldValues
};

export const Form = ({
  children,
  className,
  schema,
  id,
  onSubmit,
  defaultValues
}: PropsWithChildren<FormProps>) => {
 const methods = useForm({resolver: zodResolver(schema), defaultValues: defaultValues })

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={methods.handleSubmit(submitHandler)}
        className={`${styles.form} ${className || ''}`}
      >
        {children}
      </form>
    </FormProvider>
  );
};
