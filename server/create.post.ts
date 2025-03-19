import { delay, http, HttpResponse } from 'msw';
import { PaletteDB } from './db';

type Request = {
  colors: string[];
};

export const createPost = http.post('/create', async ({ request }) => {
  await delay(2000);

  const body = (await request.json()) as Request;

  const paletteDB = new PaletteDB();

  const result = paletteDB.create(body!.colors);

  return HttpResponse.json(
    {
      statusCode: 201,
      success: true,
      data: {
        result,
      },
    },
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
});
