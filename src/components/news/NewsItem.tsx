import React, { FC } from 'react';
import { ImageHTML, ImageItem } from '../../assets/images';

import styles from './NewsItem.module.scss';
import { ButtonType } from '../../app.constants';
import { Button } from '../shared/button/Button';

export interface News {
  image: ImageItem;
  header: string;
  content: string;
  date: string;
}

export const NewsItem: FC<News> = (props) => {
  return (
    <div className={styles.newsItem}>
      <ImageHTML img={props.image} />
      <div className={styles.content}>
        <h3 className={styles.header}>{props.header}</h3>
        <p className={styles.text}>{props.content}</p>
        <div className={styles.buttons}>
          <p className={styles.date}>{props.date}</p>
          <Button title={'Читать'} types={[ButtonType.BASE]} width={81} />
        </div>
      </div>
    </div>
  );
};
