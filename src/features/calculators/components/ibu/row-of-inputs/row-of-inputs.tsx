import { PropsWithChildren } from 'react';
import styles from './row-of-inputs.module.scss';
import { FieldError, FieldValues, FieldErrors } from 'react-hook-form';

type HopsRowFieldError = Partial<FieldError> & {
  weight: {
    message: string;
  };
  time: {
    message: string;
  };
  alphaAcids: {
    message: string;
  };
};

type RowOfInputsProps = {
  index: number;
  errors: FieldErrors<FieldValues> & { hopsRow?: HopsRowFieldError };
};

export const RowOfInputs = ({
  children,
  index,
  errors,
  ...otherProps
}: PropsWithChildren<RowOfInputsProps>) => {
  let weightMessage = null;
  let timeMessage = null;
  let alphaAcidsMessage = null;

  if (Array.isArray(errors.hopsRow)) {
    weightMessage = errors.hopsRow[index]?.weight?.message;
    timeMessage = errors.hopsRow[index]?.time?.message;
    alphaAcidsMessage = errors.hopsRow[index]?.alphaAcids?.message;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.row}
        {...otherProps}
      >
        {children}
      </div>
      {errors && (
        <div
          className={styles.alert}
          role="alert"
          aria-label={alphaAcidsMessage || weightMessage || timeMessage}
        >
          {alphaAcidsMessage || weightMessage || timeMessage}
        </div>
      )}
    </div>
  );
};
