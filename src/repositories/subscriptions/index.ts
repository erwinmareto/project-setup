import { fetcher } from '@/lib/fetcher';

export const getAllSubscription = async () => {
  const response = await fetcher({
    url: '/subscriptions'
  });

  return response;
};

export const getSubscriptionById = async (id: string) => {
  const response = await fetcher({
    url: `/subscriptions/${id}`
  });
  return response;
};
