import { Fragment } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './field-wrapper.module.css';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
  className?: string;
  error?: FieldError;
};
export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  children,
  className,
  error,
}) => {
  return (
    <Fragment>
      <label className={className}>{label}</label>
      {children}
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
        >
          {error.message}
        </div>
      )}
    </Fragment>
  );
};
