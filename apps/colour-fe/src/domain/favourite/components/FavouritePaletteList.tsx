import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import { useGetFavouriteQuery } from '../hooks/useGetFavouriteQuery';

function FavouritePaletteList() {
  const { data, refetch } = useGetFavouriteQuery();

  const { mutate } = usePatchFavouriteMutation(refetch);

  return (
    <PaletteContainer>
      {data.data.map((it) => (
        <PaletteCard
          key={it.idx}
          colours={it.colour}
          isFavourite={it.isFavourite}
          favouriteCount={it.favouriteCount}
          onClickFavourite={() => mutate(it.idx)}
        />
      ))}
    </PaletteContainer>
  );
}

export default FavouritePaletteList;
