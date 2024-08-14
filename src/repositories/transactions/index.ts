import { fetcher } from '@/lib/fetcher';

export const getAllTransactions = async () => {
  const response = await fetcher({
    url: '/transactions'
  });

  return response;
};
