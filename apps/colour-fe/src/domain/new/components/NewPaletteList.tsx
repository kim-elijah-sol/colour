import PaletteCard from '@/components/PaletteCard';
import PaletteContainer from '@/components/PaletteContainer';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Fragment } from 'react';
import { useGetNewQuery } from '../hooks/useGetNewQuery';
import { useHandleFavourite } from '../hooks/useHandleFavourite';

function NewPaletteList() {
  const { data, fetchNextPage, hasNextPage } = useGetNewQuery();

  const { handleClickFavourite, SignInModal } = useHandleFavourite();

  useInfiniteScroll(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, []);

  return (
    <>
      <PaletteContainer>
        {data?.pages.map((page) => (
          <Fragment key={page.data[0]?.idx ?? 0}>
            {page.data.map((it) => (
              <PaletteCard
                key={it.idx}
                colours={it.colour}
                isFavourite={it.isFavourite}
                favouriteCount={it.favouriteCount}
                onClickFavourite={() =>
                  handleClickFavourite(it.idx, !it.isFavourite)
                }
              />
            ))}
          </Fragment>
        ))}
      </PaletteContainer>
      <SignInModal />
    </>
  );
}

export default NewPaletteList;
