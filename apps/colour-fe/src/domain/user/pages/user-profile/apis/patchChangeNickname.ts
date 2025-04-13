import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PatchChangeNicknameRequest = {
  nickname: string | null;
};

export const patchChangeNickname = (json: PatchChangeNicknameRequest) =>
  https
    .patch<ColourResponse>('user/change-nickname', {
      json,
    })
    .json();
