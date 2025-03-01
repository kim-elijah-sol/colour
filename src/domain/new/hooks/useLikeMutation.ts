import { useMutation } from '@tanstack/react-query';
import { putLike } from '../apis/putLike';

type Options = {
  onSuccess?: (data: { isLiked: boolean }) => void;
};

export const useLikeMutation = (options?: Options) => {
  return useMutation({
    mutationFn: (id: number) => putLike(id),
    onSuccess: options?.onSuccess,
  });
};
