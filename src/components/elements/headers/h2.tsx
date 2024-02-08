import { PropsWithChildren } from 'react';
import styles from './headers.module.css';

type H2Props = {
  id?: string;
  className?: string;
  ariaLabel?: string;
};

export const H2 = ({
  children,
  className,
  id,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<H2Props>) => {
  return (
    <h2
      className={`${styles.h2} ${className || ''}`}
      id={id}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </h2>
  );
};
