import React, { FC, ReactNode } from 'react';

import styles from './BackgroundLayout.module.scss';

interface BackgroundLayoutProps {
  children: ReactNode;
}

export const BackgroundLayout: FC<BackgroundLayoutProps> = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};
