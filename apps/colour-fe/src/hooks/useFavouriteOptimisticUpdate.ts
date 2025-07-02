import { ColourResponse } from '@colour/types';
import { InfiniteData, QueryClient } from '@tanstack/react-query';

type Props = {
  queryKey: string[];
  queryClient: QueryClient;
};

type BaseItem = {
  idx: number;
  isFavourite: boolean;
  favouriteCount: number;
};

function useFavouriteOptimisticUpdate<T extends BaseItem>(props: Props) {
  function update(colourIdx: number, requestFavourite: boolean) {
    props.queryClient.setQueryData<InfiniteData<ColourResponse<T[]>>>(
      props.queryKey,
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
  }

  return update;
}

export default useFavouriteOptimisticUpdate;
