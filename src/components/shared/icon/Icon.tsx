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
  backgroundColor,
  size,
  round,
}) => {
  return (
    <div
      className={styles.icon}
      style={{
        width: size ? `${size}px` : '34px',
        height: size ? `${size}px` : '34px',
        backgroundColor: backgroundColor ? backgroundColor : 'black',
        borderRadius: round ? '19px' : 'none',
      }}
    >
      {children}
    </div>
  );
};
