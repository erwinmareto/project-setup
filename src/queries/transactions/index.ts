import { useQuery } from '@tanstack/react-query';

import { Transaction } from '@/components/parts/SubscriptionTable/types';
import { ALL_TRANSACTIONS_KEY, TRANSACTION_BY_SUB_ID_KEY } from '@/lib/constants/queryKeys';
import { getAllTransactions, getTransactionBySubId } from '@/repositories/transactions';

export const useAllTransactions = () => {
  const result = useQuery<Transaction[]>({
    queryKey: [ALL_TRANSACTIONS_KEY],
    queryFn: getAllTransactions
  });

  return result;
};

export const useGetTransactionsBySubId = (subId: string) => {
  const result = useQuery({
    queryKey: [TRANSACTION_BY_SUB_ID_KEY, subId],
    queryFn: () => getTransactionBySubId(subId)
  });

  return result;
};
