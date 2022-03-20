import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Search } from 'components/shared/search/Search';
import { Pagination } from 'components/shared/pagination/Pagination';
import { setNewsPageCount } from 'store/action-creator/news';
import { API_URL, REST_API, ROUTING } from 'app.constants';
import { INewsPage } from 'model/interfaces/INews';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { NewsContentItem } from './NewsContentItem';

import styles from './NewsPage.module.scss';

export const NewsPage: FC = () => {
  const [newsPageData, setNewsPageData] = useState<INewsPage>({});
  const { page, pageCount, search } = useTypesSelector((state) => state.news);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<INewsPage>(API_URL + REST_API.newsPage).then((resp) => {
      setNewsPageData(resp.data);
      if (resp.data.pageCount) {
        dispatch(setNewsPageCount(resp.data.pageCount));
      }
    });
  }, []);

  /*todo: хлебные крошки тоже должны приходить с сервера? в том же json, что и основные данные?*/
  return (
    <div className={clsx('wrapper', styles.news)}>
      <div className={styles.background} />
      <Breadcrumbs
        breadcrumbs={newsPageData.breadcrumbs ? newsPageData.breadcrumbs : []}
      />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{newsPageData.header}</h1>
        <Search
          placeholder="Поиск по статьям"
          defaultValue={search}
          onClick={(value: string) => {
            // dispatch(setNewsSearch(value));
            navigate(`/${ROUTING.news}?page=${page}&search=${value}`);
          }}
        />
      </div>

      <div className={styles.newsBox}>
        <NewsContentItem />
      </div>

      <Pagination
        countPages={pageCount}
        activePage={page}
        maxNumber={7}
        routing={ROUTING.news}
        search={`search=${search}`}
      />
    </div>
  );
};
