import { MutationKey, useMutationState } from '@tanstack/react-query';

function useIsMutationPending(mutationKey: MutationKey) {
  return (
    useMutationState({
      filters: {
        status: 'pending',
        mutationKey,
      },
    }).length !== 0
  );
}

export default useIsMutationPending;
