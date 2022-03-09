import { FC } from 'react';

import { PhotoSlide } from './slide/PhotoSlide';
import { IPhotoItems } from 'model/interfaces/IPhotoItems';

import styles from './PhotoBox.module.scss';

export const PhotoBox: FC<IPhotoItems> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items?.map((item) => (
        <PhotoSlide {...item} />
      ))}
    </div>
  );
};
