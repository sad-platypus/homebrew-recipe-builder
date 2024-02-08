import { useFormContext } from 'react-hook-form';
import styles from './select-field.module.scss';
import { FieldWrapper } from '../field-wrapper/field-wrapper';

type SelectFieldProps<T> = {
  label: string;
  name: string;
  isValueANumber?: boolean;
  options: {
    text: string;
    value: string | number;
    isDisabled?: boolean;
    isSelected?: boolean;
  }[];
} & T;
type FormData = {
  [key: string]: string;
};

export const SelectField = <T extends object>({
  label,
  name,
  options,
  isValueANumber = false,
  ...otherProps
}: SelectFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  const fieldError = errors[name];

  const selectOptions = options.map((option) => {
    return (
      <option
        selected={option.isSelected}
        disabled={option.isDisabled}
        value={option.value}
      >
        {option.text}
      </option>
    );
  });

  return (
    <FieldWrapper
      label={label}
      error={fieldError}
    >
      <select
        className={
          errors[name] ? `${styles.select} ${styles.error}` : styles.select
        }
        {...register(name, { valueAsNumber: isValueANumber })}
      >
        {selectOptions}
      </select>
    </FieldWrapper>
  );
};
