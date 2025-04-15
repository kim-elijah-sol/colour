import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostChangeProfileColourRequest = {
  profileColour: string;
};

export const patchChangeProfileColour = (
  json: PostChangeProfileColourRequest
) =>
  https
    .patch<ColourResponse>('user/change-profile-colour', {
      json,
    })
    .json();
