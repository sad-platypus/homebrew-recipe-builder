import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { useFormContext } from 'react-hook-form';
import styles from './input-field.module.scss';
import { boolean } from 'zod';

type InputFieldProps<T> = {
  label: string;
  name: string;
  type?: 'text' | 'number';
  readOnly?: boolean;
} & T;

type FormData = {
  [key: string]: string | number;
};

export const InputField = <T extends object>({
  label,
  name,
  type = 'text',
  readOnly,
  ...otherProps
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const fieldError = errors[name];
  const isValueANumber = type === 'number' ? true : false;

  return (
    <FieldWrapper
      label={label}
      error={fieldError}
    >
      <input
        className={
          errors[name] ? `${styles.input} ${styles.error}` : styles.input
        }
        type={type}
        readOnly={readOnly}
        {...register(name, { valueAsNumber: isValueANumber })}
        {...otherProps}
      />
    </FieldWrapper>
  );
};
