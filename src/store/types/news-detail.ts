import { INewsDetail } from 'model/interfaces/INewsDetail';

export interface NewsDetailState {
  newsDetail: INewsDetail;
  loading: boolean;
  error: null | string;
}

export enum NewsDetailActionTypes {
  FETCH_NEWS_DETAIL = 'FETCH_NEWS_DETAIL',
  FETCH_NEWS_DETAIL_SUCCESS = 'FETCH_NEWS_DETAIL_SUCCESS',
  FETCH_NEWS_DETAIL_ERROR = 'FETCH_NEWS_DETAIL_ERROR',
}

interface FetchNewsDetailAction {
  type: NewsDetailActionTypes.FETCH_NEWS_DETAIL;
}

interface FetchNewsDetailSuccessAction {
  type: NewsDetailActionTypes.FETCH_NEWS_DETAIL_SUCCESS;
  payload: INewsDetail;
}

interface FetchNewsDetailErrorAction {
  type: NewsDetailActionTypes.FETCH_NEWS_DETAIL_ERROR;
  payload: string;
}

export type NewsDetailAction =
  | FetchNewsDetailAction
  | FetchNewsDetailSuccessAction
  | FetchNewsDetailErrorAction;
