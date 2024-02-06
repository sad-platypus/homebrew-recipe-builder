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
  className,
  error,
}: PropsWithChildren<FieldWrapperProps>) => {
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
