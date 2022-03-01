import React, { FC } from 'react';
import clsx from 'clsx';

import {
  Breadcrumb,
  Breadcrumbs,
} from 'components/shared/breadcrumbs/Breadcrumbs';
import { Search } from 'components/shared/search/Search';
import { NewsItem } from './NewsItem';
import { Pagination } from 'components/shared/pagination/Pagination';
import { News } from 'model/News';

import styles from './NewsContent.module.scss';

export interface NewsContentProps {
  header: string;
  breadcrumbs: Breadcrumb[];
  news: News[];
}

export const NewsContent: FC<NewsContentProps> = ({
  header,
  news,
  breadcrumbs,
}) => {
  return (
    <div className={clsx('wrapper', styles.news)}>
      <div className={styles.background} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{header}</h1>
        <Search defaultValue="Поиск по статьям" />
      </div>
      <div className={styles.newsBox}>
        {news.map((item) => {
          return <NewsItem {...item} key={item.id} />;
        })}
      </div>
      <Pagination countPages={11} activePage={1} maxNumber={7} />
    </div>
  );
};
