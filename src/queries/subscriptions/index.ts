import { useQuery } from '@tanstack/react-query';

import { getAllSubscription } from '@/repositories/subscriptions';

export const useAllSubscriptions = () => {
  const result = useQuery({
    queryKey: ['sub'],
    queryFn: getAllSubscription
  });

  return result;
};
