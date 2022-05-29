import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Section.module.scss';

interface SectionProps {
  label?: string;
  header: string;
  className?: string;
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
  background?: boolean;
}

export const Section: FC<SectionProps> = ({
  label,
  header,
  className = '',
  headerChildren = '',
  children,
  background = false,
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {background && <div className={styles.background} />}
      {label && <p className={styles.label}>{label}</p>}

      <div className={styles.box}>
        <h2 className={styles.header}>{header}</h2>
        {headerChildren}
      </div>

      {children}
    </div>
  );
};
