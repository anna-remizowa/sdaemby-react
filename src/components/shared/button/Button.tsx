import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonType } from 'app.constants';

import styles from './Button.module.scss';

interface ButtonProps {
  types: ButtonType[];
  children: React.ReactNode;
  isSubmit?: true;
  width?: number;
}

export const Button: FC<ButtonProps> = ({
  types,
  isSubmit,
  width,
  children,
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      style={{ width: width ? `${width}px` : 'auto' }}
      className={clsx(
        styles.button,
        types.map<string>((type) => styles[type]).join(' ')
      )}
    >
      {children}
    </button>
  );
};
