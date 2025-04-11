import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostChangeEmailRequest = {
  email: string;
};

export type PostChangeEmailResponse = {
  verificationId: string;
};

export const postChangeEmailRequest = (json: PostChangeEmailRequest) =>
  https
    .post<ColourResponse<PostChangeEmailResponse>>(
      'user/change-email-request',
      {
        json,
      }
    )
    .json();
