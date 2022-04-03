import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Search } from 'components/shared/search/Search';
import { NewsItem } from './NewsItem';
import { Pagination } from 'components/shared/pagination/Pagination';
import { NewsPage } from 'model/News';
import { API_URL, REST_API } from 'app.constants';

import styles from './NewsContent.module.scss';

export const NewsContent: FC = () => {
  const [appNews, setAppNews] = useState<NewsPage>({});

  /*todo: обработка ошибок во всех axios-запросах, если что-то пойдет не так*/
  useEffect(() => {
    axios.get<NewsPage>(API_URL + REST_API.news).then((resp) => {
      setAppNews(resp.data);
    });
  }, []);

  const useQuery = new URLSearchParams(useLocation().search);
  const maxPage = appNews.maxPage ? appNews.maxPage : 10;
  const activePageNumber = Number(useQuery.get('page'));
  const activePage =
    !isNaN(activePageNumber) &&
    activePageNumber > 0 &&
    activePageNumber <= maxPage
      ? Number(useQuery.get('page'))
      : 1;

  /*todo: хлебные крошки тоже должны приходить с сервера? в том же json, что и основные данные?*/
  return (
    <div className={clsx('wrapper', styles.news)}>
      <div className={styles.background} />
      <Breadcrumbs
        breadcrumbs={appNews.breadcrumbs ? appNews.breadcrumbs : []}
      />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{appNews.header}</h1>
        <Search defaultValue="Поиск по статьям" />
      </div>
      <div className={styles.newsBox}>
        {appNews.news
          ? appNews.news.map((item) => {
              return <NewsItem {...item} key={item.id} />;
            })
          : ''}
      </div>
      <Pagination countPages={maxPage} activePage={activePage} maxNumber={7} />
    </div>
  );
};
