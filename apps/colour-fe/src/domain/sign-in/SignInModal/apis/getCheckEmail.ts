import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type GetCheckEmailResponse = {
  isAlready: boolean;
};

export const getCheckEmail = (email: string) =>
  https
    .get<ColourResponse<GetCheckEmailResponse>>('user/check-email', {
      searchParams: {
        email,
      },
    })
    .json();
