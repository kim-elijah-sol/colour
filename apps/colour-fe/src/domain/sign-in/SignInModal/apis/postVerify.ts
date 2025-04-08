import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostVerifyRequest = {
  id: string;
  code: string;
};

export const postVerify = (json: PostVerifyRequest) =>
  https
    .post<ColourResponse>('user/verify', {
      json,
    })
    .json();
