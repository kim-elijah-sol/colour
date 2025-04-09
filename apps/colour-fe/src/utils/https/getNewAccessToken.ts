import { ColourResponse } from '@colour/types';
import { https } from './https';

export async function getNewAccessToken() {
  const {
    data: { accessToken },
  } = await https
    .get<
      ColourResponse<{
        accessToken: string;
      }>
    >('user/refresh')
    .json();

  localStorage.setItem('colour-access-token', accessToken);
}
