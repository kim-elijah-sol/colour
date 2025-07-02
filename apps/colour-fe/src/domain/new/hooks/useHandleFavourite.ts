import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import useSignIn from '@/hooks/useSignIn';
import { useAccessToken } from '@/queries/useAccessToken';
import { ColourResponse } from '@colour/types';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { GetNewResponse } from '../apis/getNew';

export function useHandleFavourite() {
  const [SignInModal, open] = useSignIn();

  const queryClient = useQueryClient();

  const { data: accessToken } = useAccessToken();

  const { mutate } = usePatchFavouriteMutation();

  function handleClickFavourite(colourIdx: number, requestFavourite: boolean) {
    if (accessToken) {
      queryClient.setQueryData<InfiniteData<ColourResponse<GetNewResponse[]>>>(
        ['getNew'],
        (data) => {
          if (!data) return data;

          return {
            ...data,
            pages: data.pages.map((page) => ({
              ...page,
              data: page.data.map((it) =>
                it.idx === colourIdx
                  ? {
                      ...it,
                      isFavourite: requestFavourite,
                      favouriteCount:
                        it.favouriteCount + (requestFavourite ? 1 : -1),
                    }
                  : it
              ),
            })),
          };
        }
      );

      mutate(colourIdx);
    } else {
      open();
    }
  }

  return {
    SignInModal,
    handleClickFavourite,
  };
}
