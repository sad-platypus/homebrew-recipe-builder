import { PropsWithChildren } from 'react';
import styles from './text.module.scss';

type PProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
};

export const P = ({
  children,
  id,
  className,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<PProps>) => {
  return (
    <p
      className={`${styles.text} ${className || ''}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};
