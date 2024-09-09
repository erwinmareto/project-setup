import { useQuery } from '@tanstack/react-query';

import { ALL_TRANSACTIONS_KEY, TRANSACTION_BY_SUB_ID_KEY } from '@/lib/constants/queryKeys';
import { getAllTransactions, getTransactionBySubId } from '@/repositories/transactions';

export const useAllTransactions = () => {
  const result = useQuery({
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
