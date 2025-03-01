import { delay, http, HttpResponse } from 'msw';

import { PaletteDB } from './db';

let isFirstLoad = true;

export const getNew = http.get('/new', async () => {
  await delay(isFirstLoad ? 1500 : 300);

  isFirstLoad = false;

  return HttpResponse.json(new PaletteDB().getData(), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
