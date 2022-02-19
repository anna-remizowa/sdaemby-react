import React from 'react';

import { BaseLayout } from './layouts/BaseLayout';
import { NewsContent } from './components/news/NewsContent';
import { news } from './data/news.data';
import { newsPageBreadcrumbs } from './data/breadcrumbs.data';

function App() {
  return (
    <>
      <BaseLayout>
        <NewsContent
          header="Новости"
          news={news}
          breadcrumbs={newsPageBreadcrumbs}
        />
      </BaseLayout>
    </>
  );
}

export default App;
