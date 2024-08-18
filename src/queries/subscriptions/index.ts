import { useQuery } from '@tanstack/react-query';

import { ALL_SUBSCRIPTIONS_KEY, SUBSCRIPTION_BY_ID } from '@/lib/constants/queryKeys';
import { getAllSubscription, getSubscriptionById } from '@/repositories/subscriptions';

export const useAllSubscriptions = () => {
  const result = useQuery({
    queryKey: [ALL_SUBSCRIPTIONS_KEY],
    queryFn: getAllSubscription
  });

  return result;
};

export const useSubscriptionById = (id: string) => {
  const result = useQuery({
    queryKey: [SUBSCRIPTION_BY_ID, id],
    queryFn: () => getSubscriptionById(id)
  });

  return result;
};
