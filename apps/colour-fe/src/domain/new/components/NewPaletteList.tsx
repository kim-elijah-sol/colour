import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import { useHandleLike } from '../hooks/useHandleLike';
import { useNewQuery } from '../hooks/useNewQuery';

function NewPaletteList() {
  const { data, refetch } = useNewQuery();

  const { handleLike } = useHandleLike({
    onSuccess: () => refetch(),
  });

  return (
    <PaletteContainer>
      {data.map((it) => (
        <PaletteCard
          key={it.id}
          colours={it.colors}
          isLike={it.isLike}
          likeCount={it.likeCount}
          onClickLike={() => handleLike(it.id)}
        />
      ))}
    </PaletteContainer>
  );
}

export default NewPaletteList;
