import React, { FC } from 'react';

import { ImageHTML, ImageItem } from 'assets/images';
import { ButtonType } from 'app.constants';
import { Button } from 'components/shared/button/Button';

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
      <ImageHTML img={image} />
      <div className={styles.content}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.text}>{content}</p>
        <div className={styles.buttons}>
          <p className={styles.date}>{date}</p>
          <Button types={[ButtonType.BASE]}>Читать</Button>
        </div>
      </div>
    </div>
  );
};
