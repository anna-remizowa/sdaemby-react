import { Dispatch } from 'redux';
import axios from 'axios';

import { NewsAction, NewsActionTypes } from 'store/types/news';
import { INewsContent } from 'model/interfaces/INews';
import { API_URL, REST_API } from 'app.constants';
import { smoothScrollPromise } from 'utils/smoothScrollPromise';

interface FetchNewsParams {
  page: number;
  limit: number;
  search?: string;
}

export const fetchNews = (params: FetchNewsParams) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch(setNewsPage(params.page));
      await smoothScrollPromise();
      dispatch(setNewsSearch(params.search ? params.search : ''));
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get<INewsContent>(API_URL + REST_API.news, {
        params: { ...params },
      });
      if (response.data.news) {
        dispatch({
          type: NewsActionTypes.FETCH_NEWS_SUCCESS,
          payload: response.data.news,
        });
      }
      if (response.data.pageCount) {
        dispatch(setNewsPageCount(response.data.pageCount));
      }
    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новостей',
      });
    }
  };
};

export const setNewsPage = (page: number): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_PAGE, payload: page };
};

export const setNewsPageCount = (pageCount: number): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_PAGE_COUNT, payload: pageCount };
};

export const setNewsSearch = (search: string): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_SEARCH, payload: search };
};
