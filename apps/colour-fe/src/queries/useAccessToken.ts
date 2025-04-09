import { useQuery } from '@tanstack/react-query';

export const useAccessToken = () => {
  return useQuery({
    queryKey: ['accessToken'],
    queryFn: () => localStorage.getItem('colour-access-token'),
    initialData: localStorage.getItem('colour-access-token')
  });
};
