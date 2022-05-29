import React, { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

import { ButtonStyleType } from 'model/enum/ButtonStyleType';

import styles from './Button.module.scss';

interface ButtonProps {
  types?: ButtonStyleType[];
  children: React.ReactNode;
  isSubmit?: boolean;
  width?: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  types = [],
  isSubmit,
  width = 'auto',
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      style={{ width: width }}
      className={clsx(
        styles.button,
        types.map<string>((type) => styles[type]).join(' ')
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};
