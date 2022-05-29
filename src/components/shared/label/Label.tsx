import React, { FC } from 'react';
import clsx from 'clsx';

import { LabelStyleType } from 'model/enum/LabelStyleType';

import styles from './Label.module.scss';

interface LabelProps {
  type: LabelStyleType;
  children: React.ReactNode;
}

export const Label: FC<LabelProps> = ({ type, children }) => {
  return <p className={clsx(styles.label, styles[type])}>{children}</p>;
};
