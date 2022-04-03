import React, { FC } from 'react';
import clsx from 'clsx';

import { LabelType } from '../../../app.constants';

import styles from './Label.module.scss';

interface LabelProps {
  title: string;
  type: LabelType;
}

export const Label: FC<LabelProps> = ({ title, type }) => {
  return (
    <p
      className={clsx(
        styles.label,
        type === LabelType.BASE && styles.base,
        type === LabelType.PURPLE && styles.purple
      )}
    >
      {title}
    </p>
  );
};
