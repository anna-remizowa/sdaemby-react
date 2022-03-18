import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { NewsItem } from './NewsItem';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { fetchNews } from 'store/action-creator/news';
import { LIMIT_PAGE_NEWS } from 'app.constants';

export const NewsContentItem: FC = () => {
  const { news, loading, error, page } = useTypesSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews(page, LIMIT_PAGE_NEWS));
  }, [page]);

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
