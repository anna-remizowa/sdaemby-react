import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonType, LabelType, ROUTING } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { Label } from 'components/shared/label/Label';
import { News } from 'model/News';
import { getDateFromISO } from 'utils/getDateFromISO';

import styles from './NewsItem.module.scss';

export const NewsItem: FC<News> = ({
  id,
  header,
  image,
  alt,
  content,
  date,
}) => {
  return (
    <div className={styles.newsItem}>
      <img className={styles.img} src={image} alt={alt} />
      <div className={styles.content}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.text}>{content}</p>
        <div className={styles.buttons}>
          <Label title={getDateFromISO(date)} type={LabelType.BASE} />
          <Link to={`/${ROUTING.news}/:${id}`}>
            <Button types={[ButtonType.BASE]}>Читать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
