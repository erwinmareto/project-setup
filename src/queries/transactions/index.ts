import { useQuery } from '@tanstack/react-query';

import { getAllTransactions } from '@/repositories/transactions';

export const useAllTransactions = () => {
  const result = useQuery({
    queryKey: ['transactions'],
    queryFn: getAllTransactions
  });

  return result;
};
