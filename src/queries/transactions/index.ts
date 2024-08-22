import { useQuery } from '@tanstack/react-query';

import { Transaction } from '@/components/parts/SubscriptionTable/types';
import { ALL_TRANSACTIONS_KEY } from '@/lib/constants/queryKeys';
import { getAllTransactions } from '@/repositories/transactions';

export const useAllTransactions = () => {
  const result = useQuery<Transaction[]>({
    queryKey: [ALL_TRANSACTIONS_KEY],
    queryFn: getAllTransactions
  });

  return result;
};
