import { patchFavourite } from '@/apis/patchFavourite';
import toast from '@/components/Toast/toast';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';

function usePatchFavouriteMutation(callback?: () => void) {
  const mutation = useMutation({
    mutationFn: patchFavourite,
    mutationKey: ['patchFavourite'],
    onSuccess: (res) => {
      const message = res.data.favourite
        ? 'Marked as a favourite!'
        : 'Unmarked as favourite.';

      toast.open(message);
      callback?.();
    },
    onError: toastOnHttpsError,
  });

  return mutation;
}

export default usePatchFavouriteMutation;
