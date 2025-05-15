import { useSuspenseQuery } from '@tanstack/react-query';
import { getFavourite } from '../apis/getFavourite';

export const useGetFavouriteQuery = () => {
  return useSuspenseQuery({
    queryKey: ['getFavourite'],
    queryFn: getFavourite,
    refetchOnMount: true,
  });
};
