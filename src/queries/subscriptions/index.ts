import { useQuery } from '@tanstack/react-query';

import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { getAllSubscription } from '@/repositories/subscriptions';

export const useAllSubscriptions = () => {
  const result = useQuery({
    queryKey: [ALL_SUBSCRIPTIONS_KEY],
    queryFn: getAllSubscription
  });

  return result;
};
