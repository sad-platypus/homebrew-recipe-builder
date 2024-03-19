import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { FieldError, useFormContext } from 'react-hook-form';
import styles from './input-field.module.scss';
import { InputHTMLAttributes } from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'password';
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type FormData = {
  [key: string]: string | number;
};

export const InputField = ({
  label,
  name,
  type = 'text',
  className,
  ...otherProps
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const fieldError = errors[name];
  const isValueANumber = type === 'number' ? true : false;

  return (
    <FieldWrapper
      inputId={name}
      className={className}
      label={label}
      errorMessage={fieldError?.message}
    >
      <input
        id={name}
        className={styles.input}
        type={type}
        {...register(name, { valueAsNumber: isValueANumber })}
        {...otherProps}
      />
    </FieldWrapper>
  );
};

