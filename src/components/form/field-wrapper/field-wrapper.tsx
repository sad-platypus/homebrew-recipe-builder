import { Fragment, PropsWithChildren } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './field-wrapper.module.scss';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  error?: FieldError;
};
export const FieldWrapper = ({
  children,
  label,
  error,
}: PropsWithChildren<FieldWrapperProps>) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      {children}
      {error?.message && (
        <div
          className={styles.alert}
          role="alert"
          aria-label={error.message}
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
