import { SubscriptionPayload } from '@/components/parts/SubscriptionForms/type';
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

export const editSubscription = async (id: string, payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: `/subscriptions/${id}`,
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  return response;
};

export const deleteSubscription = async (id: string) => {
  const response = await fetcher({
    url: `/subscriptions/${id}`,
    method: 'DELETE'
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
