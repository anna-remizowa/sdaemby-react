import { FC } from 'react';
import { IPhotoSlide } from 'model/interfaces/IPhotoSlide';

import styles from './PhotoSlide.module.scss';
import { Button } from '../../button/Button';
import { ButtonStyleType } from '../../../../model/enum/ButtonStyleType';

export const PhotoSlide: FC<IPhotoSlide> = ({
  img,
  label,
  title,
  items,
  href,
}) => {
  console.log(img);
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.opacity} />
      <div className={styles.wrapper}>
        {label ? <p className={styles.label}>{label}</p> : ''}
        {title ? <p className={styles.title}>{title}</p> : ''}

        {items ? (
          <div className={styles.items}>
            {items.map((item) => (
              <Button types={[ButtonStyleType.SMALL, ButtonStyleType.PURPLE]}>
                {item}
              </Button>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
