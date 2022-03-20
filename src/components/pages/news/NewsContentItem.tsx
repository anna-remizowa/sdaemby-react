import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { NewsItem } from './NewsItem';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { fetchNews } from 'store/action-creator/news';
import { LIMIT_PAGE_NEWS } from 'app.constants';

export const NewsContentItem: FC = () => {
  const { news, loading, error } = useTypesSelector((state) => state.news);
  const dispatch = useDispatch();
  const useQuery = new URLSearchParams(useLocation().search);
  const search = useQuery?.get('search');
  const params = {
    page: Number(useQuery.get('page')) ? Number(useQuery.get('page')) : 1,
    limit: LIMIT_PAGE_NEWS,
    search: search ? search : '',
  };

  useEffect(() => {
    dispatch(fetchNews({ ...params }));
  }, [params.page, params.search]);

  /*todo: обработка загрузки - отдельный компонент*/
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  /*todo: обработка ошибки - отдельный компонент*/
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {news
        ? news.map((item) => {
            return <NewsItem {...item} key={item.id} />;
          })
        : ''}
    </>
  );
};
