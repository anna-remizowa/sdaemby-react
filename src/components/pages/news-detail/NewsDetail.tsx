import React, { FC } from 'react';
import clsx from 'clsx';

import { News } from '../../../model/News';
import { Breadcrumb, Breadcrumbs } from '../../shared/breadcrumbs/Breadcrumbs';
import { Label } from '../../shared/label/Label';
import { COLORS, LabelType } from '../../../app.constants';
import { Socials } from '../../shared/socials/Socials';
import { NewsItem } from '../news/NewsItem';

import { BREADCRUMBS_NEWS_DETAIL } from '../../../data/breadcrumbs.data';
import { NEWS_DETAIL } from '../../../data/news-detail.data';

import styles from './NewsDetail.module.scss';

export interface NewsDetailProps {
  news: News;
  otherNews: News[];
}

export const NewsDetail: FC = () => {
  /*todo: mocks*/
  const content = NEWS_DETAIL;
  const breadcrumbs: Breadcrumb[] = [...BREADCRUMBS_NEWS_DETAIL];
  breadcrumbs.push({
    name: content.news.header,
  });

  return (
    <div className={styles.newsDetail}>
      <div className={styles.content}>
        <div className={clsx('wrapper-narrow', styles.wrapper)}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className={styles.header}>{content.news.header}</h1>
          <div className={styles.shared}>
            <Label title={content.news.date} type={LabelType.PURPLE} />
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
          src={content.news.image}
          alt={content.news.alt}
        />
        <p className={styles.text}>{content.news.content}</p>
      </div>

      <div className={styles.content}>
        <div className={clsx('wrapper', styles.wrapperBottom)}>
          <h1 className={styles.headerBottom}>{'Читайте также'}</h1>
          <div className={styles.newsBox}>
            {content.otherNews.map((item) => {
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
