import { PropsWithChildren } from 'react';
import styles from './text.module.scss';

type TextProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
};

export const Text = ({
  children,
  id,
  className,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<TextProps>) => {
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
