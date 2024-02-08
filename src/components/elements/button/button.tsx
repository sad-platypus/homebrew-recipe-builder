import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit';
  id?: string;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};
export const Button = ({
  children,
  onClick,
  type,
  className,
  id,
  disabled,
  ariaLabel,
  ...otherProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </button>
  );
};
