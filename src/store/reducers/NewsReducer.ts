import { NewsAction, NewsActionTypes, NewsState } from 'store/types/news';

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
  pageCount: 1,
  page: 1,
  search: '',
};

export const newsReducer = (
  state = initialState,
  action: NewsAction
): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return {
        ...state,
        loading: true,
      };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NewsActionTypes.SET_NEWS_PAGE:
      return { ...state, page: action.payload };
    case NewsActionTypes.SET_NEWS_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case NewsActionTypes.SET_NEWS_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
