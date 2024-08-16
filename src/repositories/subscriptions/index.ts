import { SubscriptionPayload } from '@/components/parts/SubscriptionForms/type';
import { fetcher } from '@/lib/fetcher';

export const getAllSubscription = async () => {
  const response = await fetcher({
    url: '/subscriptions'
  });

  return response;
};

export const addSubscription = async (payload: SubscriptionPayload) => {
  const response = await fetcher({
    url: '/subscriptions',
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return response;
};
