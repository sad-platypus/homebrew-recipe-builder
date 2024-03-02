import { PropsWithChildren } from 'react';
import styles from './description-wrapper.module.scss';

type DescriptionWrapperProps = {
  className?: string;
};
export const DescriptionWrapper = ({
  children,
  className,
}: PropsWithChildren<DescriptionWrapperProps>) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
