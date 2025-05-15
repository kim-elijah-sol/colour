import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type GetFavouriteResponse = {
  colour: string[];
  idx: number;
  createdAt: Date;
  favouriteCount: number;
  isFavourite: boolean;
};

export const getFavourite = () =>
  https.get<ColourResponse<GetFavouriteResponse[]>>('colour/favourite').json();
