import React, { FC, useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Label } from 'components/shared/label/Label';
import { ShareWith } from 'components/shared/share-with/ShareWith';
import { NewsItem } from 'components/pages/news/NewsItem';
import { getDateFromISO } from 'utils/getDateFromISO';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import { COLORS } from 'model/enum/Colors';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { fetchNewsDetail } from 'store/action-creator/news-detail';
import { NEWS_DETAIL_COUNT_NEWS_LIMIT } from 'app.constants';

import styles from './NewsDetail.module.scss';
import { CONSTANTS } from '../../../constants/common';

export const NewsDetail: FC = () => {
  const params = useParams();
  const { newsDetail, loading, error } = useTypesSelector(
    (state) => state.newsDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get<INewsDetail>(`${API_URL}${REST_API.news}/:${params.newsId}`)
    //   .then((resp) => {
    //     smoothScrollPromise().then(() => {
    //       setAppNewsDetail(resp.data);
    //     });
    //   });
    dispatch(
      fetchNewsDetail({
        newsId: Number(params.newsId),
        newsOtherCount: NEWS_DETAIL_COUNT_NEWS_LIMIT,
      })
    );
  }, [params.newsId]);

  /*todo: обработка загрузки - отдельный компонент*/
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  /*todo: обработка ошибки - отдельный компонент*/
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.newsDetail}>
      {newsDetail.news ? (
        <>
          <div className={styles.content}>
            <div className={clsx('wrapper-narrow', styles.wrapper)}>
              <Breadcrumbs
                breadcrumbs={
                  newsDetail.breadcrumbs ? newsDetail.breadcrumbs : []
                }
              />
              <h1 className={styles.header}>{newsDetail.news.header}</h1>
              <div className={styles.shared}>
                <Label type={LabelStyleType.PURPLE}>
                  {getDateFromISO(newsDetail.news.date)}
                </Label>
                <ShareWith
                  title={CONSTANTS.share}
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
              src={newsDetail.news.image}
              alt={newsDetail.news.alt}
            />
            <p className={styles.text}>{newsDetail.news.content}</p>
          </div>
        </>
      ) : (
        ''
      )}

      <div className={styles.content}>
        <div className={clsx('wrapper', styles.wrapperBottom)}>
          <h1 className={styles.headerBottom}>{CONSTANTS.readAlso}</h1>
          <div className={styles.newsBox}>
            {newsDetail.otherNews
              ? newsDetail.otherNews.map((item) => {
                  return <NewsItem {...item} key={item.id} />;
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
