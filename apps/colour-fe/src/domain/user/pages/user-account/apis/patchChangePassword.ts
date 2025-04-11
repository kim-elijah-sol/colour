import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PatchChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export const patchChangePassword = (json: PatchChangePasswordRequest) =>
  https
    .patch<ColourResponse>('user/change-password', {
      json,
    })
    .json();
