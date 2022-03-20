import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { newsReducer } from './reducers/NewsReducer';
import { rentReducer } from './reducers/RentReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  rent: rentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
