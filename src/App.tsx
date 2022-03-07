import React from 'react';

import { BaseLayout } from './layouts/BaseLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsContent } from './components/pages/news/NewsContent';
import { NotFound } from './components/pages/404/NotFound';
import { Home } from './components/pages/home/Home';
import { NewsDetail } from './components/pages/news-detail/NewsDetail';

import { DEVELOPMENT_MODE, ROUTING } from './app.constants';

if (process.env.NODE_ENV === DEVELOPMENT_MODE) {
  require('mock/MockAdapter');
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTING.home} element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTING.news} element={<NewsContent />} />
          <Route path={`${ROUTING.news}/:newsId`} element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
