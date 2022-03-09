import React, { FC } from 'react';
import clsx from 'clsx';

import { LabelStyleType } from 'model/enum/LabelStyleType';

import styles from './Label.module.scss';

interface LabelProps {
  title: string;
  type: LabelStyleType;
}

export const Label: FC<LabelProps> = ({ title, type }) => {
  return <p className={clsx(styles.label, styles[type])}>{title}</p>;
};
