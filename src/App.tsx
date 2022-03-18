import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { BaseLayout } from './layouts/BaseLayout';
import { NewsPage } from './components/pages/news/NewsPage';
import { NotFound } from './components/pages/404/NotFound';
import { Home } from './components/pages/home/Home';
import { NewsDetail } from './components/pages/news-detail/NewsDetail';
import { Contacts } from './components/pages/contacts/Contacts';
import { DEVELOPMENT_MODE, ROUTING } from './app.constants';
import { LocationDetail } from './components/pages/location-detail/LocationDetail';
import { Catalog } from './components/pages/catalog/Catalog';

if (process.env.NODE_ENV === DEVELOPMENT_MODE) {
  require('mock/MockAdapter');
}

/*todo: добавить redux*/
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTING.home} element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTING.news} element={<NewsPage />} />
            <Route path={`${ROUTING.news}/:newsId`} element={<NewsDetail />} />
            <Route path={ROUTING.contacts} element={<Contacts />} />
            <Route
              path={`${ROUTING.catalog}/:catalogId`}
              element={<Catalog />}
            />
            <Route
              path={`${ROUTING.location}/:locationId`}
              element={<LocationDetail />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
