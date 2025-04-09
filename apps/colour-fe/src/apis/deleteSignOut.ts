import { ColourResponse } from '@colour/types';
import ky from 'ky';

export const deleteSignOut = () =>
  ky.delete<ColourResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/user/sign-out`,
    {
      headers: {
        refresh_token: localStorage.getItem('colour-refresh-token')!,
      },
    }
  );
