import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PatchFavouriteResponse = {
  favourite: boolean;
  colourIdx: number;
};

export const patchFavourite = (colourIdx: number) =>
  https
    .patch<ColourResponse<PatchFavouriteResponse>>(
      `colour/favourite/${colourIdx}`
    )
    .json();
