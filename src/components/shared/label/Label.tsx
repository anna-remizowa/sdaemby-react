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
        { [styles.base]: LabelType.BASE },
        { [styles.purple]: type === LabelType.PURPLE }
      )}
    >
      {title}
    </p>
  );
};
