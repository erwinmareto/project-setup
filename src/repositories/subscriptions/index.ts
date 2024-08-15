import { fetcher } from '@/lib/fetcher';

export const getAllSubscription = async () => {
  const response = await fetcher({
    url: '/subscriptions'
  });

  return response;
};
