import React, { FC } from 'react';
import clsx from 'clsx';

import {
  Breadcrumb,
  Breadcrumbs,
} from 'components/shared/breadcrumbs/Breadcrumbs';
import { Search } from 'components/shared/search/Search';
import { News, NewsItem } from './NewsItem';
import { Pagination } from 'components/shared/pagination/Pagination';

import styles from './NewsContent.module.scss';

interface NewsProps {
  header: string;
  breadcrumbs: Breadcrumb[];
  news: News[];
}

export const NewsContent: FC<NewsProps> = ({ header, news, breadcrumbs }) => {
  return (
    <div className={clsx('wrapper', styles.news)}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{header}</h1>
        <Search defaultValue="Поиск по статьям" />
      </div>
      <div className={styles.newsBox}>
        {news.map((item, index) => {
          return (
            <NewsItem
              header={item.header}
              content={item.content}
              date={item.date}
              image={item.image}
              key={index}
            />
          );
        })}
      </div>
      <Pagination countPages={11} activePage={1} maxNumber={7} />
    </div>
  );
};
