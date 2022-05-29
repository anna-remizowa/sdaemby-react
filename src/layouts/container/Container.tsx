import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { ContainerType } from 'model/enum/ContainerType';

import styles from './Container.module.scss';

interface ContainerProps {
  type?: ContainerType;
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({
  type,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(styles.container, type ? styles[type] : '', className)}
    >
      {children}
    </div>
  );
};
