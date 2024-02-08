import { PropsWithChildren } from 'react';
import styles from './headers.module.css';

type H1Props = {
  id?: string;
  className?: string;
  ariaLabel?: string;
};

export const H1 = ({
  children,
  className,
  id,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<H1Props>) => {
  return (
    <h1
      className={`${styles.h1} ${className || ''}`}
      id={id}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </h1>
  );
};
