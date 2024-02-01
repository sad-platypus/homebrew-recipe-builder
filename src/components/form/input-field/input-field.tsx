import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { FieldError, FieldValues, useFormContext } from 'react-hook-form';

type InputFieldProps = {
  label?: string;
  className?: string;
  error?: FieldError | undefined;
  name: string;
};

export const InputField = ({ label, className, name }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name] as FieldError; //ogarnąć to chujstwo
  return (
    <FieldWrapper
      className={className}
      label={label}
      error={fieldError}
    >
      <input {...register(name)} />
    </FieldWrapper>
  );
};
