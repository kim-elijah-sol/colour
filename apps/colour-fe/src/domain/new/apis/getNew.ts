import { tail } from '@/utils/functions';
import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type GetNewResponse = {
  colour: string[];
  idx: number;
  createdAt: Date;
  favouriteCount: number;
  isFavourite: boolean;
};

export const getNew = (lastId: number | null) =>
  https
    .get<ColourResponse<GetNewResponse[]>>('colour/new', {
      searchParams: lastId
        ? {
            lastId: lastId?.toString(),
          }
        : undefined,
    })
    .json()
    .then((response) => ({
      ...response,
      nextCursor: tail(response.data)?.idx ?? null,
    }));
