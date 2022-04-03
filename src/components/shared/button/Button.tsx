import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonType } from 'app.constants';

import styles from './Button.module.scss';

interface ButtonProps {
  types: ButtonType[];
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ types, children }) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        types.includes(ButtonType.BASE) && styles.base,
        types.includes(ButtonType.HIGHLIGHT) && styles.highlight,
        types.includes(ButtonType.YELLOW) && styles.yellow,
        types.includes(ButtonType.BIG) && styles.big
      )}
    >
      {children}
    </button>
  );
};
