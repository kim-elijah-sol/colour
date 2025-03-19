import { useCreateMutation } from './useCreateMutation';

type Options = Parameters<typeof useCreateMutation>[0];

export function useHandleCreate(options?: Options) {
  const { mutate, isPending } = useCreateMutation(options);

  return {
    handleCreate: mutate,
    isPending,
  };
}
