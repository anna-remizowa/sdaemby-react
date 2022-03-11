import React, { FC } from 'react';

import styles from './icon.module.scss';

interface IconProps {
  backgroundColor?: string;
  size?: number;
  round?: boolean | string;
  iconWidth?: number;
  iconHeight?: number;
  children: React.ReactNode;
}

export const Icon: FC<IconProps> = ({
  children,
  backgroundColor = 'black',
  size = 34,
  round,
}) => {
  return (
    <div
      className={styles.icon}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
        borderRadius: round ? '19px' : 'none',
      }}
    >
      {children}
    </div>
  );
};
