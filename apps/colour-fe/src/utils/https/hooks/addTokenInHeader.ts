import { BeforeRequestHook } from 'ky';

export const addTokenInHeader: BeforeRequestHook = (request) => {
  const accessToken = localStorage.getItem('colour-access-token');
  const refreshToken = localStorage.getItem('colour-refresh-token');

  if (!accessToken) return;
  request.headers.set('access_token', accessToken);
  if (!refreshToken) return;
  request.headers.set('refresh_token', refreshToken);
};
