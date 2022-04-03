import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTING } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { Label } from 'components/shared/label/Label';
import { INews } from 'model/interfaces/INews';
import { getDateFromISO } from 'utils/getDateFromISO';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';

import styles from './NewsCard.module.scss';

export const NewsCard: FC<INews> = ({
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
          <Label type={LabelStyleType.BASE}>{getDateFromISO(date)}</Label>
          <Link to={`/${ROUTING.news}/${id}`}>
            <Button types={[ButtonStyleType.BASE]}>Читать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
