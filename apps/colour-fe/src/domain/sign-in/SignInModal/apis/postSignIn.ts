import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostSignInRequest = {
  email: string;
  password: string;
};

export type PostSignInResponse = {
  accessToken: string;
  refreshToken: string;
};

export const postSignIn = (json: PostSignInRequest) =>
  https
    .post<ColourResponse<PostSignInResponse>>('user/sign-in', {
      json,
    })
    .json();
