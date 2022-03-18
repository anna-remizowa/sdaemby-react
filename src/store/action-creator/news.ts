import { NewsAction, NewsActionTypes } from '../types/news';
import { Dispatch } from 'redux';
import axios from 'axios';

import { INewsContent } from 'model/interfaces/INews';
import { API_URL, REST_API } from 'app.constants';

export const fetchNews = (page = 1, limit = 10, filter: any = null) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get<INewsContent>(API_URL + REST_API.news, {
        params: { _page: page, _limit: limit, _filter: filter },
      });
      setTimeout(() => {
        if (response.data.news) {
          dispatch({
            type: NewsActionTypes.FETCH_NEWS_SUCCESS,
            payload: response.data.news,
          });
        }
        if (response.data.pageCount) {
          dispatch(setNewsPageCount(response.data.pageCount));
        }
      }, 1000);
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
