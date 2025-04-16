import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PatchChangeIntroduceRequest = {
  introduce: string;
};

export const patchChangeIntroduce = (json: PatchChangeIntroduceRequest) =>
  https
    .patch<ColourResponse>('user/change-introduce', {
      json,
    })
    .json();
