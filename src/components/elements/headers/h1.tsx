'use client';

import { PropsWithChildren } from 'react';
import styles from './headers.module.scss';
import { motion } from 'framer-motion';
import { headerVariants } from '@/utils/constants/animation-variants';

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
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <h1
        className={`${styles.h1} ${className || ''}`}
        id={id}
        aria-label={ariaLabel}
        {...otherProps}
      >
        {children}
      </h1>
    </motion.div>
  );
};
