import { PropsWithChildren } from 'react';
import styles from './card.module.scss';
import { H2 } from '@components/elements';

type CardProps = {
  title: string;
  style?: string;
  headerStyle?: string;
  contentStyle?: string;
};
export const Card = ({
  title,
  style,
  headerStyle,
  contentStyle,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <div className={`${styles.wrapper} ${style || ''}`}>
      <div className={`${styles.header} ${headerStyle || ''}`}>
        <H2>{title}</H2>
      </div>
      <div className={`${styles.content} ${contentStyle || ''}`}>
        {children}
      </div>
    </div>
  );
};
