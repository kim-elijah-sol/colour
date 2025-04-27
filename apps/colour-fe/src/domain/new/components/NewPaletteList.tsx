import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import { useGetNewQuery } from '../hooks/useGetNewQuery';
import { useHandleFavourite } from '../hooks/useHandleFavourite';

function NewPaletteList() {
  const { data } = useGetNewQuery();

  const { handleClickFavourite, SignInModal } = useHandleFavourite();

  return (
    <>
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
      <SignInModal />
    </>
  );
}

export default NewPaletteList;
