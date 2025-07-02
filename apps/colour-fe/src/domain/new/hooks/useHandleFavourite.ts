import useGetNewFavouriteOptimisticUpdate from '@/hooks/useGetNewFavouriteOptimisticUpdate';
import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import useSignIn from '@/hooks/useSignIn';
import { useAccessToken } from '@/queries/useAccessToken';

export function useHandleFavourite() {
  const [SignInModal, open] = useSignIn();

  const { data: accessToken } = useAccessToken();

  const { mutate } = usePatchFavouriteMutation();

  const getNewFavouriteOptimisticUpdate = useGetNewFavouriteOptimisticUpdate();

  function handleClickFavourite(colourIdx: number, requestFavourite: boolean) {
    if (accessToken) {
      getNewFavouriteOptimisticUpdate(colourIdx, requestFavourite);

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
