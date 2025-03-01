import { useLikeMutation } from './useLikeMutation';

type Options = Parameters<typeof useLikeMutation>[0];

export function useHandleLike(options?: Options) {
  const { mutate } = useLikeMutation(options);

  return {
    handleLike: mutate,
  };
}
