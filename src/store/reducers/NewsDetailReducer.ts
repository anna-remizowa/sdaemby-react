import {
  NewsDetailAction,
  NewsDetailActionTypes,
  NewsDetailState,
} from 'store/types/news-detail';

const initialState: NewsDetailState = {
  newsDetail: {},
  loading: false,
  error: null,
};

export const newsDetailReducer = (
  state = initialState,
  action: NewsDetailAction
): NewsDetailState => {
  switch (action.type) {
    case NewsDetailActionTypes.FETCH_NEWS_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case NewsDetailActionTypes.FETCH_NEWS_DETAIL_SUCCESS:
      return { ...state, loading: false, newsDetail: action.payload };
    case NewsDetailActionTypes.FETCH_NEWS_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
