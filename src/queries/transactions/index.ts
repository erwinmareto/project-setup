import { useQuery } from '@tanstack/react-query';

import { ALL_TRANSACTIONS_KEY } from '@/lib/constants/queryKeys';
import { getAllTransactions } from '@/repositories/transactions';

export const useAllTransactions = () => {
  const result = useQuery({
    queryKey: [ALL_TRANSACTIONS_KEY],
    queryFn: getAllTransactions
  });

  return result;
};
