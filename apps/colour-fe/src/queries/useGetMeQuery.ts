import { getMe } from '@/apis/getMe';
import { useQuery } from '@tanstack/react-query';
import { useAccessToken } from './useAccessToken';

export const useGetMeQuery = () => {
  const { data } = useAccessToken();

  return useQuery({
    queryKey: ['getMe'],
    queryFn: getMe,
    enabled: !!data,
  });
};
