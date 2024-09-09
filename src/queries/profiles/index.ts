import { useQuery } from '@tanstack/react-query';

import { PROFILE_BY_ID } from '@/lib/constants/queryKeys';
import { getProfileById } from '@/repositories/profiles';

export const useGetProfileById = (id: string) => {
  const result = useQuery({
    queryKey: [PROFILE_BY_ID, id],
    queryFn: () => getProfileById()
  });
  return result;
};
