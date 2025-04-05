import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNew } from '../apis/fetchNew';

export const useNewQuery = () => {
  return useSuspenseQuery({
    queryKey: ['new.suspense'],
    queryFn: fetchNew,
  });
};
