import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Label } from 'components/shared/label/Label';
import { API_URL, COLORS, LabelType, REST_API } from 'app.constants';
import { Socials } from 'components/shared/socials/Socials';
import { NewsItem } from 'components/pages/news/NewsItem';
import { INewsDetail } from 'model/INewsDetail';
import { getDateFromISO } from 'utils/getDateFromISO';

import styles from './NewsDetail.module.scss';

export const NewsDetail: FC = () => {
  const params = useParams();
  /*todo: хлебные крошки тоже должны приходить с сервера? в том же json, что и основные данные?*/
  const [appNewsDetail, setAppNewsDetail] = useState<INewsDetail>({});

  useEffect(() => {
    axios
      .get<INewsDetail>(`${API_URL}${REST_API.news}/:${params.newsId}`)
      .then((resp) => {
        setAppNewsDetail(resp.data);
      });
  }, []);

  return (
    <div className={styles.newsDetail}>
      {appNewsDetail.news ? (
        <>
          <div className={styles.content}>
            <div className={clsx('wrapper-narrow', styles.wrapper)}>
              <Breadcrumbs
                breadcrumbs={
                  appNewsDetail.breadcrumbs ? appNewsDetail.breadcrumbs : []
                }
              />
              <h1 className={styles.header}>{appNewsDetail.news.header}</h1>
              <div className={styles.shared}>
                <Label
                  title={getDateFromISO(appNewsDetail.news.date)}
                  type={LabelType.PURPLE}
                />
                <Socials
                  title={'Поделиться'}
                  iconBackgroundColor={COLORS.PURPLE_BACKGROUND}
                  iconColor={COLORS.PURPLE}
                  url={window.location.href}
                />
              </div>
            </div>
          </div>

          <div className={'wrapper-narrow'}>
            <img
              className={styles.img}
              src={appNewsDetail.news.image}
              alt={appNewsDetail.news.alt}
            />
            <p className={styles.text}>{appNewsDetail.news.content}</p>
          </div>
        </>
      ) : (
        ''
      )}

      <div className={styles.content}>
        <div className={clsx('wrapper', styles.wrapperBottom)}>
          <h1 className={styles.headerBottom}>{'Читайте также'}</h1>
          <div className={styles.newsBox}>
            {appNewsDetail.otherNews
              ? appNewsDetail.otherNews.map((item) => {
                  return (
                    <NewsItem
                      id={item.id}
                      header={item.header}
                      content={item.content}
                      date={item.date}
                      image={item.image}
                      alt={item.alt}
                      key={item.id}
                    />
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
