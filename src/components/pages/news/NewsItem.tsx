import React, { FC } from 'react';

import clsx from 'clsx';

import { ImageItem } from 'components/shared/images/images';
import { ButtonType, LabelType } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { Label } from 'components/shared/label/Label';

import styles from './NewsItem.module.scss';

export interface News {
  image: ImageItem;
  header: string;
  content: string;
  date: string;
}

export const NewsItem: FC<News> = ({ header, image, content, date }) => {
  return (
    <div className={styles.newsItem}>
      <img
        className={clsx(image.clazz ? image.clazz : '')}
        src={image.src}
        alt={image.alt}
      />
      <div className={styles.content}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.text}>{content}</p>
        <div className={styles.buttons}>
          <Label title={date} type={LabelType.BASE} />
          <Button types={[ButtonType.BASE]}>Читать</Button>
        </div>
      </div>
    </div>
  );
};
