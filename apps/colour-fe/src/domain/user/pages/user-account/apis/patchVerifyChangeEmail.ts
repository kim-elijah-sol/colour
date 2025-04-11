import { PostVerifyRequest } from '@/domain/sign-in/SignInModal/apis/postVerify';
import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PatchVerifyChangeEmailRequest = PostVerifyRequest;

export const patchVerifyChangeEmail = (json: PatchVerifyChangeEmailRequest) =>
  https
    .patch<ColourResponse>('user/verify-change-email', {
      json,
    })
    .json();
