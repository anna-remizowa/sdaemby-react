import { INews } from 'model/interfaces/INews';

export interface NewsState {
  news: INews[];
  loading: boolean;
  error: null | string;
  pageCount: number;
  page: number;
  search: string;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  SET_NEWS_PAGE = 'SET_NEWS_PAGE',
  SET_NEWS_PAGE_COUNT = 'SET_NEWS_PAGE_COUNT',
  SET_NEWS_SEARCH = 'SET_NEWS_SEARCH',
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: INews[];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

interface SetNewsPageAction {
  type: NewsActionTypes.SET_NEWS_PAGE;
  payload: number;
}

interface SetNewsPageCountAction {
  type: NewsActionTypes.SET_NEWS_PAGE_COUNT;
  payload: number;
}

interface SetNewsSearch {
  type: NewsActionTypes.SET_NEWS_SEARCH;
  payload: string;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction
  | SetNewsPageAction
  | SetNewsPageCountAction
  | SetNewsSearch;
