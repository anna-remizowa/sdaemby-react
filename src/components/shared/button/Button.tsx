import React, { FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonType {
  PURPLE,
  BASE,
  YELLOW,
}

interface IButton {
  title: string;
  width: number;
  types: ButtonType[];
}

export const Button: FC<IButton> = (props: IButton) => {
  const classes = [styles.button];
  props.types.forEach((type) => {
    switch (type) {
      case ButtonType.BASE:
        classes.push(styles.base);
        break;
      case ButtonType.PURPLE:
        classes.push(styles.purple);
        break;
      case ButtonType.YELLOW:
        classes.push(styles.yellow);
        break;
    }
  });

  return (
    <button
      type="button"
      className={classes.join(' ')}
      style={{ width: `${props.width}px` }}
    >
      {props.title}
    </button>
  );
};
