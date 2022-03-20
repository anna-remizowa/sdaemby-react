import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Label } from 'components/shared/label/Label';
import { API_URL, REST_API } from 'app.constants';
import { ShareWith } from 'components/shared/sharewith/ShareWith';
import { NewsItem } from 'components/pages/news/NewsItem';
import { INewsDetail } from 'model/interfaces/INewsDetail';
import { getDateFromISO } from 'utils/getDateFromISO';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import { COLORS } from 'model/enum/Colors';
import { smoothScrollPromise } from 'utils/smoothScrollPromise';

import styles from './NewsDetail.module.scss';

export const NewsDetail: FC = () => {
  const params = useParams();
  /*todo: хлебные крошки тоже должны приходить с сервера? в том же json, что и основные данные?*/
  const [appNewsDetail, setAppNewsDetail] = useState<INewsDetail>({});

  useEffect(() => {
    axios
      .get<INewsDetail>(`${API_URL}${REST_API.news}/:${params.newsId}`)
      .then((resp) => {
        smoothScrollPromise().then(() => {
          setAppNewsDetail(resp.data);
        });
      });
  }, [params.newsId]);

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
                <Label type={LabelStyleType.PURPLE}>
                  {getDateFromISO(appNewsDetail.news.date)}
                </Label>
                <ShareWith
                  title={'Поделиться'}
                  iconBackgroundColor={COLORS.PURPLE_BACKGROUND}
                  iconColor={COLORS.PURPLE}
                  url={window.location.href}
                  round={true}
                  shares={{
                    VK: { isInclude: true, width: 20, height: 12 },
                    Facebook: { isInclude: true, width: 10, height: 17 },
                    Viber: { isInclude: true, width: 17, height: 18 },
                    Telegram: { isInclude: true, width: 19, height: 14 },
                    Whatsapp: { isInclude: true, width: 17, height: 17 },
                  }}
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
                  return <NewsItem {...item} key={item.id} />;
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
