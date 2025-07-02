import { patchFavourite, PatchFavouriteResponse } from '@/apis/patchFavourite';
import toast from '@/components/Toast/toast';
import { toastOnHttpsError } from '@/utils/https';
import { ColourResponse } from '@colour/types';
import { useMutation } from '@tanstack/react-query';

function usePatchFavouriteMutation(
  callback?: (data: ColourResponse<PatchFavouriteResponse>) => void
) {
  const mutation = useMutation({
    mutationFn: patchFavourite,
    mutationKey: ['patchFavourite'],
    onSuccess: (res) => {
      const message = res.data.favourite
        ? 'Marked as a favourite!'
        : 'Unmarked as favourite.';

      toast.open(message);
      callback?.(res);
    },
    onError: toastOnHttpsError,
  });

  return mutation;
}

export default usePatchFavouriteMutation;
