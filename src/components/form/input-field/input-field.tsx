import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { useFormContext } from 'react-hook-form';

type InputFieldProps = {
  label?: string;
  className?: string;
  name: string;
  type: 'text' | 'number';
};

type FormData = {
  [key: string]: string;
};

export const InputField = ({
  label,
  className,
  name,
  type,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const fieldError = errors[name];
  
  return (
    <FieldWrapper
      className={className}
      label={label}
      error={fieldError}
    >
      <input
        type={type}
        {...register(name)}
      />
    </FieldWrapper>
  );
};
