import toast from '@/components/Toast/toast';
import useSignIn from '@/hooks/useSignIn';
import { useAccessToken } from '@/queries/useAccessToken';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFavourite } from '../apis/patchFavourite';

export function useHandleFavourite() {
  const [SignInModal, open] = useSignIn();

  const queryClient = useQueryClient();

  const { data: accessToken } = useAccessToken();

  const { mutate } = useMutation({
    mutationFn: patchFavourite,
    mutationKey: ['patchFavourite'],
    onSuccess: () => {
      toast.open('Marked as a favourite!');
      queryClient.invalidateQueries({
        queryKey: ['getNew'],
      });
    },
    onError: toastOnHttpsError,
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
