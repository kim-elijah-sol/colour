import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import useGetNewFavouriteOptimisticUpdate from '@/hooks/useGetNewFavouriteOptimisticUpdate';
import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import { ColourResponse } from '@colour/types';
import { useQueryClient } from '@tanstack/react-query';
import { GetFavouriteResponse } from '../apis/getFavourite';
import { useGetFavouriteQuery } from '../hooks/useGetFavouriteQuery';

function FavouritePaletteList() {
  const queryClient = useQueryClient();

  const { data } = useGetFavouriteQuery();

  const { mutate } = usePatchFavouriteMutation();

  const getNewFavouriteOptimisticUpdate = useGetNewFavouriteOptimisticUpdate();

  function handleClickFavourite(colourIdx: number) {
    queryClient.setQueryData(
      ['getFavourite'],
      (data: ColourResponse<GetFavouriteResponse[]>) => ({
        ...data,
        data: data.data.filter((it) => it.idx !== colourIdx),
      })
    );

    getNewFavouriteOptimisticUpdate(colourIdx, false);

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
