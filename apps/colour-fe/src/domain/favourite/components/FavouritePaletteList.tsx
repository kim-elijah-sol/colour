import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import { GetNewResponse } from '@/domain/new/apis/getNew';
import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import { ColourResponse } from '@colour/types';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { GetFavouriteResponse } from '../apis/getFavourite';
import { useGetFavouriteQuery } from '../hooks/useGetFavouriteQuery';

function FavouritePaletteList() {
  const queryClient = useQueryClient();

  const { data } = useGetFavouriteQuery();

  const { mutate } = usePatchFavouriteMutation();

  function handleClickFavourite(colourIdx: number) {
    queryClient.setQueryData(
      ['getFavourite'],
      (data: ColourResponse<GetFavouriteResponse[]>) => ({
        ...data,
        data: data.data.filter((it) => it.idx !== colourIdx),
      })
    );

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
                    isFavourite: false,
                    favouriteCount: it.favouriteCount - 1,
                  }
                : it
            ),
          })),
        };
      }
    );

    mutate(colourIdx);
  }

  return (
    <PaletteContainer>
      {data.data.map((it) => (
        <PaletteCard
          key={it.idx}
          colours={it.colour}
          isFavourite={it.isFavourite}
          favouriteCount={it.favouriteCount}
          onClickFavourite={() => handleClickFavourite(it.idx)}
        />
      ))}
    </PaletteContainer>
  );
}

export default FavouritePaletteList;
