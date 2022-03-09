import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_URL, REST_API } from 'app.constants';
import { HEADER } from './data/header.data';
import { FOOTER } from './data/footer.data';
import { NEWS } from './data/news.data';
import { NEWS_DETAIL } from './data/news-detail.data';
import { CONTACTS } from './data/contacts.data';
import { APARTMENTS_FILTER } from './data/apartments.filter.data';

const mock = new MockAdapter(axios);

mock.onGet(API_URL + REST_API.header).reply(200, HEADER);
//mock.onGet(API_URL + REST_API.header).networkError();

mock.onGet(API_URL + REST_API.footer).reply(200, FOOTER);

mock.onGet(API_URL + REST_API.news).reply(200, NEWS);

mock.onGet(new RegExp(`${API_URL + REST_API.news}/*`)).reply(200, NEWS_DETAIL);

mock.onGet(API_URL + REST_API.contacts).reply(200, CONTACTS);

mock.onGet(API_URL + REST_API.apartFilter).reply(200, APARTMENTS_FILTER);
