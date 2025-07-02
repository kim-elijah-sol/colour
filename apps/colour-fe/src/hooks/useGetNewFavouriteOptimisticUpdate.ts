import { useQueryClient } from '@tanstack/react-query';
import useFavouriteOptimisticUpdate from './useFavouriteOptimisticUpdate';

function useGetNewFavouriteOptimisticUpdate() {
  const queryClient = useQueryClient();

  const update = useFavouriteOptimisticUpdate({
    queryKey: ['getNew'],
    queryClient,
  });

  return update;
}

export default useGetNewFavouriteOptimisticUpdate;
