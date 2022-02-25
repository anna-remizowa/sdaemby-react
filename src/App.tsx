import React from 'react';

import { BaseLayout } from './layouts/BaseLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsContent } from './components/pages/news/NewsContent';
import { NEWS } from './data/news.data';
import { BREADCRUMBS_NEWS_PAGE } from './data/breadcrumbs.data';
import { NotFound } from './components/pages/404/NotFound';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route
            path="news"
            element={
              <NewsContent
                header={NEWS.header}
                news={NEWS.news}
                breadcrumbs={BREADCRUMBS_NEWS_PAGE}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
