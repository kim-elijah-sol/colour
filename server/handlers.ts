import { http, HttpResponse } from 'msw';
import { getNew } from './new.get';
import { putLike } from './like.put';

export const handlers = [
  http.get('/', () => {
    return HttpResponse.json([{ name: 1 }], {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  getNew,
  putLike,
];
