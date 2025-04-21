import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type PostCreatePaletteRequest = {
  colour: string[];
};

export type PostCreatePaletteResponse = {
  idx: number;
};

export const postCreatePalette = (json: PostCreatePaletteRequest) =>
  https
    .post<ColourResponse<PostCreatePaletteResponse>>('colour/palette', {
      json,
    })
    .json();
