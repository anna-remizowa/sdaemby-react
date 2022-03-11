import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_URL, REST_API } from 'app.constants';
import { HEADER } from './data/header.data';
import { FOOTER } from './data/footer.data';
import { NEWS } from './data/news.data';
import { NEWS_DETAIL } from './data/news-detail.data';
import { CONTACTS } from './data/contacts.data';
import { APARTMENTS_FILTER } from './data/apartments.filter.data';
import { PHOTO_SLIDES_DATA } from './data/photo-slides.data';
import { LIST_RENT_DATA } from './data/rent.data';
import { APARTMENTS_RENT_DATA } from './data/apartments.rent.data';

const mock = new MockAdapter(axios);

const REST_API_MOCK = [
  {
    api: REST_API.header,
    data: HEADER,
  },
  {
    api: REST_API.footer,
    data: FOOTER,
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
    api: REST_API.contacts,
    data: CONTACTS,
  },
  {
    api: REST_API.apartFilter,
    data: APARTMENTS_FILTER,
  },
  {
    api: REST_API.photoSlider,
    data: PHOTO_SLIDES_DATA,
  },
  {
    api: REST_API.listRent,
    data: LIST_RENT_DATA,
  },
  {
    api: REST_API.listApartRent,
    data: APARTMENTS_RENT_DATA,
  },
];

REST_API_MOCK.forEach(({ api, data, regExp }) => {
  mock
    .onGet(regExp ? new RegExp(API_URL + api) : API_URL + api)
    .reply(200, data);
});

// mock.onGet(API_URL + REST_API.header).networkError();
