import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type GetNewResponse = {
  colour: string[];
  idx: number;
  createdAt: Date;
  favouriteCount: number;
  isFavourite: boolean;
};

export const getNew = () =>
  https.get<ColourResponse<GetNewResponse[]>>('colour/new').json();
