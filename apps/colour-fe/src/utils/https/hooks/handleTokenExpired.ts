import { deleteSignOut } from '@/apis/deleteSignOut';
import ky, { BeforeRetryHook, HTTPError } from 'ky';
import { getNewAccessToken } from '../getNewAccessToken';

export const handleTokenExpired: BeforeRetryHook = async ({ error }) => {
  if (error instanceof HTTPError) {
    const { message } = await error.response.json<{ message: string }>();

    if (message === 'access token is expired') {
      await getNewAccessToken();
    } else if (message === 'refresh token is expired') {
      await deleteSignOut();

      localStorage.removeItem('colour-access-token');
      localStorage.removeItem('colour-refresh-token');

      location.reload();
    }
  } else {
    return ky.stop;
  }
};
