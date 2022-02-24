import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonType } from 'app.constants';

import styles from './Button.module.scss';

interface ButtonProps {
  types: ButtonType[];
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ types, children }) => {
  const classes = [styles.button];
  types.forEach((type) => {
    switch (type) {
      case ButtonType.BASE:
        classes.push(styles.base);
        break;
      case ButtonType.HIGHLIGHT:
        classes.push(styles.highlight);
        break;
      case ButtonType.YELLOW:
        classes.push(styles.yellow);
        break;
    }
  });

  return (
    <button type="button" className={clsx(classes)}>
      {children}
    </button>
  );
};
