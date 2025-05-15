import usePatchFavouriteMutation from '@/hooks/usePatchFavouriteMutation';
import useSignIn from '@/hooks/useSignIn';
import { useAccessToken } from '@/queries/useAccessToken';
import { useQueryClient } from '@tanstack/react-query';

export function useHandleFavourite() {
  const [SignInModal, open] = useSignIn();

  const queryClient = useQueryClient();

  const { data: accessToken } = useAccessToken();

  const { mutate } = usePatchFavouriteMutation(() => {
    queryClient.invalidateQueries({
      queryKey: ['getNew'],
    });
  });

  function handleClickFavourite(colourIdx: number) {
    if (accessToken) {
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
