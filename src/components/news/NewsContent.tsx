import React, { FC } from 'react';

import { Breadcrumb, Breadcrumbs } from '../shared/breadcrumbs/Breadcrumbs';
import { Search } from '../shared/search/Search';
import { News, NewsItem } from './NewsItem';

import styles from './NewsContent.module.scss';
import { Pagination } from '../shared/pagination/Pagination';

interface NewsProps {
  header: string;
  breadcrumbs: Breadcrumb[];
  news: News[];
}

export const NewsContent: FC<NewsProps> = (props) => {
  return (
    <div className={['wrapper', styles.news].join(' ')}>
      <Breadcrumbs breadcrumbs={props.breadcrumbs} />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{props.header}</h1>
        <Search defaultValue="Поиск по статьям" />
      </div>
      <div className={styles.newsBox}>
        {props.news.map((item, index) => {
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
