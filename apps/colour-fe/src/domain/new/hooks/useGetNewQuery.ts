import { useSuspenseQuery } from '@tanstack/react-query';
import { getNew } from '../apis/getNew';

export const useGetNewQuery = () => {
  return useSuspenseQuery({
    queryKey: ['getNew'],
    queryFn: getNew,
  });
};
