import { http, HttpResponse } from 'msw';
import { createPost } from './create.post';
import { putLike } from './like.put';
import { getNew } from './new.get';

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
  createPost,
];
