import { FC } from 'react';

import { PhotoSlide } from './slide/PhotoSlide';
import { ILinkProps } from 'model/interfaces/ILinkProps';

import styles from './PhotoBox.module.scss';

export const PhotoBox: FC<ILinkProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items?.map((item, index) => (
        <PhotoSlide {...item} key={index} />
      ))}
    </div>
  );
};
