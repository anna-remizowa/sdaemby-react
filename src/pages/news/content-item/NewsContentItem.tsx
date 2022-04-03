import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { NewsCard } from 'components/shared/news-card/NewsCard';
import { useTypesSelector } from 'hooks/useTypesSelector';
import { fetchNews } from 'store/action-creator/news';
import { LIMIT_PAGE_NEWS } from 'app.constants';
import { Loader } from 'components/shared/loader/Loader';
import { Error } from 'components/shared/error/Error';

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {news
        ? news.map((item) => {
            return <NewsCard {...item} key={item.id} />;
          })
        : ''}
    </>
  );
};
