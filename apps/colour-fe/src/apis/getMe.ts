import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type MeResponse = {
  email: string;
  profileColour: string;
};

export const getMe = () =>
  https.get<ColourResponse<MeResponse>>('user/me').json();
