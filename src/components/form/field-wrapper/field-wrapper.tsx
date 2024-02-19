import { PropsWithChildren } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './field-wrapper.module.scss';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  errorMessage?: string;
};
export const FieldWrapper = ({
  children,
  label,
  errorMessage,
  className,
}: PropsWithChildren<FieldWrapperProps>) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label className={styles.label}>{label}</label>
      {children}
      {errorMessage && (
        <div
          className={styles.alert}
          role="alert"
          aria-label={errorMessage}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};
