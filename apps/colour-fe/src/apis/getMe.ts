import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type MeResponse = {
  email: string;
  profileColour: string;
  nickname: string | null;
  introduce: string | null;
};

export const getMe = () =>
  https.get<ColourResponse<MeResponse>>('user/me').json();
