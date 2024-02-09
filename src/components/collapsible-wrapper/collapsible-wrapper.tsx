import { PropsWithChildren, useState } from 'react';
import styles from './collapsible-wrapper.module.scss';
import { H2 } from '../elements/headers/h2';

type CollapsibleWrapperProps = {
  title: string;
  headerStyle?: string;
  contentStyle?: string;
};
export const CollapsibleWrapper = ({
  children,
  title,
  headerStyle,
  contentStyle,
}: PropsWithChildren<CollapsibleWrapperProps>) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.wrapper}>
      <div
        onClick={toggleCollapse}
        className={`${styles.header} ${headerStyle || ''}`}
      >
        <H2>{title}</H2>
        <span>{isCollapsed ? '▼' : '▲'}</span>
      </div>
      {!isCollapsed && (
        <div className={`${styles.content} ${contentStyle || ''}`}>
          {children}
        </div>
      )}
    </div>
  );
};
