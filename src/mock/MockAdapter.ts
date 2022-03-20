import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_URL, REST_API } from 'app.constants';
import { HEADER } from './data/header.data';
import { FOOTER } from './data/footer.data';
import { NEWS, NEWS_PAGE } from './data/news.data';
import { NEWS_DETAIL } from './data/news-detail.data';
import { CONTACTS } from './data/contacts.data';
import { APARTMENTS_FILTER } from './data/apartments.filter.data';
import { APARTMENTS_RENT_DATA, RENT_DATA } from './data/apartments.rent.data';
import { LOCATIONS_DATA_1, LOCATIONS_DATA_2 } from './data/locations.data';
import { HOME_NEWS_DATA } from './data/home.data';

const mock = new MockAdapter(axios);

const REST_API_MOCK_GET = [
  {
    api: REST_API.header,
    data: HEADER,
  },
  {
    api: REST_API.footer,
    data: FOOTER,
  },
  {
    api: REST_API.newsPage,
    data: NEWS_PAGE,
  },
  {
    api: REST_API.news,
    data: NEWS,
  },
  {
    api: `${REST_API.news}/*`,
    data: NEWS_DETAIL,
    regExp: true,
  },
  {
    api: `${REST_API.locations}/info`,
    data: HOME_NEWS_DATA,
  },
  {
    api: REST_API.contacts,
    data: CONTACTS,
  },
  {
    api: `${REST_API.filter}/*`,
    data: APARTMENTS_FILTER,
    regExp: true,
  },
  {
    api: REST_API.rent,
    data: RENT_DATA,
  },
  {
    api: `${REST_API.rent}/*`,
    data: APARTMENTS_RENT_DATA,
    regExp: true,
  },
];

mock.onGet(API_URL + REST_API.locations).reply(({ params }) => {
  if (Object.keys(params).includes('type')) {
    switch (params['type']) {
      case 'list':
        return [200, LOCATIONS_DATA_2];
      case 'photo':
        return [200, LOCATIONS_DATA_1];
    }
  }
  return [400, 'Error'];
});

REST_API_MOCK_GET.forEach(({ api, data, regExp }) => {
  mock
    .onGet(regExp ? new RegExp(API_URL + api) : API_URL + api)
    .reply(200, data);
});

// mock.onGet(API_URL + REST_API.header).networkError();
