import { PropsWithChildren, useState } from 'react';
import styles from './collapsible-wrapper.module.scss';
import { H2 } from '../elements';
import { AnimatePresence, motion } from 'framer-motion';
import { basicVariants } from '@/constants/animation-variants';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      variants={basicVariants}
      initial="initial"
      animate="animate"
      className={styles.wrapper}
    >
      <div
        onClick={toggleCollapse}
        className={`${styles.header} ${headerStyle || ''}`}
      >
        <H2>{title}</H2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          ▼
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
            className={`${styles.content} ${contentStyle || ''}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
