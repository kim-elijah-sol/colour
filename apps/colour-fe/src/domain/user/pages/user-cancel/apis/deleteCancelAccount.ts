import { https } from '@/utils/https';
import { ColourResponse } from '@colour/types';

export type DeleteCancelAccountRequest = {
  password: string;
};

export const deleteCancelAccount = (json: DeleteCancelAccountRequest) =>
  https
    .delete<ColourResponse>('user/cancel-account', {
      json,
    })
    .json();
