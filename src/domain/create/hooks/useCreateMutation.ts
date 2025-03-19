import { useMutation } from '@tanstack/react-query';
import { postCreate, PostCreateRequest } from '../apis/postCreate';

type Options = {
  onSuccess?: () => void;
};

export const useCreateMutation = (options?: Options) => {
  return useMutation({
    mutationFn: (body: PostCreateRequest) => postCreate(body),
    onSuccess: options?.onSuccess,
  });
};
