import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from 'layouts/container/Container';
import { ContainerType } from 'model/enum/ContainerType';
import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Label } from 'components/shared/label/Label';
import { ShareWith } from 'components/shared/share-with/ShareWith';
import { getDateFromISO } from 'utils/getDateFromISO';
import { NewsCard } from 'components/shared/news-card/NewsCard';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import { COLORS } from 'model/enum/Colors';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { fetchNewsDetail } from 'store/action-creator/news-detail';
import { NEWS_DETAIL_COUNT_NEWS_LIMIT } from 'app.constants';
import { CONSTANTS } from 'constants/common.constants';

import styles from './NewsDetail.module.scss';
import { Loader } from 'components/shared/loader/Loader';
import { Error } from 'components/shared/error/Error';

export const NewsDetail: FC = () => {
  const params = useParams();
  const { newsDetail, loading, error } = useTypesSelector(
    (state) => state.newsDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchNewsDetail({
        newsId: Number(params.newsId),
        newsOtherCount: NEWS_DETAIL_COUNT_NEWS_LIMIT,
      })
    );
  }, [params.newsId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className={styles.newsDetail}>
      {newsDetail.news ? (
        <>
          <div className={styles.content}>
            <Container type={ContainerType.NARROW} className={styles.wrapper}>
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
            </Container>
          </div>

          <Container type={ContainerType.NARROW}>
            <img
              className={styles.img}
              src={newsDetail.news.image}
              alt={newsDetail.news.alt}
            />
            <p className={styles.text}>{newsDetail.news.content}</p>
          </Container>
        </>
      ) : (
        ''
      )}

      <div className={styles.content}>
        <Container className={styles.wrapperBottom}>
          <h1 className={styles.headerBottom}>{CONSTANTS.readAlso}</h1>
          <div className={styles.newsBox}>
            {newsDetail.otherNews
              ? newsDetail.otherNews.map((item) => {
                  return <NewsCard {...item} key={item.id} />;
                })
              : ''}
          </div>
        </Container>
      </div>
    </div>
  );
};
