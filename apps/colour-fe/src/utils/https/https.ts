import ky, { HTTPError } from 'ky';
import { getNewAccessToken } from './getNewAccessToken';

export const https = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  retry: {
    limit: 3,
    statusCodes: [401],
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = localStorage.getItem('colour-access-token');
        const refreshToken = localStorage.getItem('colour-refresh-token');

        if (!accessToken) return;
        request.headers.set('access_token', accessToken);
        if (!refreshToken) return;
        request.headers.set('refresh_token', refreshToken);
      },
    ],
    beforeRetry: [
      async ({ error }) => {
        if (error instanceof HTTPError) {
          const { message } = await error.response.json();

          if (message === 'access token is expired') {
            await getNewAccessToken();
          } else {
            localStorage.removeItem('colour-access-token');
            localStorage.removeItem('colour-refresh-token');

            location.reload();
          }
        } else {
          return ky.stop;
        }
      },
    ],
  },
});
