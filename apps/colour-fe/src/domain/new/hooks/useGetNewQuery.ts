import { useInfiniteQuery } from '@tanstack/react-query';
import { getNew } from '../apis/getNew';

export const useGetNewQuery = () => {
  return useInfiniteQuery({
    queryKey: ['getNew'],
    queryFn: ({ pageParam }) => getNew(pageParam),
    initialPageParam: 0,
    getNextPageParam: (response) => response.nextCursor,
  });
};
