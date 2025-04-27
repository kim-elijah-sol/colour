import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import { useGetNewQuery } from '../hooks/useGetNewQuery';
import { useHandleLike } from '../hooks/useHandleLike';

function NewPaletteList() {
  const { data } = useGetNewQuery();

  const { handleLike } = useHandleLike({});

  return (
    <PaletteContainer>
      {data.data.map((it) => (
        <PaletteCard
          key={it.idx}
          colours={it.colour}
          isLike={it.isFavourite}
          likeCount={it.favouriteCount}
          onClickLike={() => handleLike(it.idx)}
        />
      ))}
    </PaletteContainer>
  );
}

export default NewPaletteList;
