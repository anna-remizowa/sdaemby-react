import React from 'react';

import { BaseLayout } from './layouts/BaseLayout';
import { NewsContent } from './components/news/NewsContent';
import { NEWS } from './data/news.data';
import { BREADCRUMBS_NEWS_PAGE } from './data/breadcrumbs.data';

function App() {
  return (
    <>
      <BaseLayout>
        <NewsContent
          header="Новости"
          news={NEWS}
          breadcrumbs={BREADCRUMBS_NEWS_PAGE}
        />
      </BaseLayout>
    </>
  );
}

export default App;
