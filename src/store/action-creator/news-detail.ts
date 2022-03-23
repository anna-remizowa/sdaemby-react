import { Dispatch } from 'redux';
import axios from 'axios';

import { API_URL, REST_API } from 'app.constants';
import { smoothScrollPromise } from 'utils/smoothScrollPromise';
import {
  NewsDetailAction,
  NewsDetailActionTypes,
} from 'store/types/news-detail';
import { INewsDetail } from 'model/interfaces/INewsDetail';

interface FetchNewsDetailParams {
  newsId: number;
  newsOtherCount?: number;
}

export const fetchNewsDetail = (params: FetchNewsDetailParams) => {
  return async (dispatch: Dispatch<NewsDetailAction>) => {
    try {
      await smoothScrollPromise();
      dispatch({ type: NewsDetailActionTypes.FETCH_NEWS_DETAIL });
      const response = await axios.get<INewsDetail>(
        `${API_URL}${REST_API.news}/:${params.newsId}`,
        {
          params: { ...params },
        }
      );
      setTimeout(() => {
        if (response.data) {
          dispatch({
            type: NewsDetailActionTypes.FETCH_NEWS_DETAIL_SUCCESS,
            payload: response.data,
          });
        }
      }, 1000);
    } catch (e) {
      dispatch({
        type: NewsDetailActionTypes.FETCH_NEWS_DETAIL_ERROR,
        payload: 'Произошла ошибка при загрузке новости',
      });
    }
  };
};
