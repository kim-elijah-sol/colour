import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostSignUpRequest = {
  email: string;
  password: string;
};

export type PostSignUpResponse = {
  verificationId: string;
}

export const postSignUpRequest = (json: PostSignUpRequest) =>
  https
    .post<ColourResponse<PostSignUpResponse>>('user/sign-up-request', {
      json,
    })
    .json();
