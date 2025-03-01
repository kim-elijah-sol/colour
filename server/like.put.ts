import { delay, http, HttpResponse } from 'msw';
import { PaletteDB } from './db';

export const putLike = http.put('/like/:id', async ({ params }) => {
  await delay(300);

  const paletteDB = new PaletteDB();

  const result = paletteDB.like(Number(params.id));

  return HttpResponse.json(
    {
      isLiked: result,
    },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
});
