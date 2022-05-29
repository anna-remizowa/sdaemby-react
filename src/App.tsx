import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { DEVELOPMENT_MODE, ROUTING } from './app.constants';
import { BaseLayout } from './layouts/BaseLayout';
import { NewsPage } from './pages/news/NewsPage';
import { NotFound } from './pages/404/NotFound';
import { Home } from './pages/home/Home';
import { NewsDetail } from './pages/news-detail/NewsDetail';
import { Contacts } from './pages/contacts/Contacts';
import { LocationDetail } from './pages/location-detail/LocationDetail';
import { Catalog } from './pages/catalog/Catalog';
import { Authorization } from './pages/auth/Authorization';
import { Registration } from './pages/auth/Registration';
import { ConfirmRegistration } from './pages/auth/ConfirmRegistration';

if (process.env.NODE_ENV === DEVELOPMENT_MODE) {
  require('mock/MockAdapter');
}

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
            <Route path={ROUTING.auth} element={<Authorization />} />
            <Route path={ROUTING.reg} element={<Registration />} />
            <Route path={ROUTING.confirm} element={<ConfirmRegistration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
