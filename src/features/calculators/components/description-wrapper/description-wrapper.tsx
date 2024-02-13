import { PropsWithChildren } from 'react';
import styles from './description-wrapper.module.scss';

export const DescriptionWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};
