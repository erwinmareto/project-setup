import { fetcher } from '@/lib/fetcher';

export const getAllTransactions = async () => {
  const response = await fetcher({
    url: '/transactions'
  });

  return response;
};

export const addTransaction = async (payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: '/transactions',
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return response;
};

export const deleteTransaction = async (id: string) => {
  const response = await fetcher({
    url: `/transactions/${id}`,
    method: 'DELETE'
  });

  return response;
};
