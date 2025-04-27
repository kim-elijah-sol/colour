import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export const patchFavourite = (colourIdx: number) =>
  https.patch<ColourResponse>(`colour/favourite/${colourIdx}`).json();
