'use client';

import { useParams } from 'next/navigation';

import PaymentHistory from '@/components/parts/PaymentHistory';
import ReactQuery from '@/components/parts/ReactQuery';
import SubscriptionDetail from '@/components/parts/SubscriptionDetail';
import { useSubscriptionById } from '@/queries/subscriptions';
import { useAllTransactions } from '@/queries/transactions';

const DetailsPage = () => {
  const { id } = useParams();
  const subscriptionByIdQuery = useSubscriptionById(id as string);
  const transactionQuery = useAllTransactions();
  const currentSub = subscriptionByIdQuery.data?.appName;

  return (
    <>
      <ReactQuery queryResult={subscriptionByIdQuery} render={(data) => <SubscriptionDetail data={data} />} />
      <ReactQuery
        queryResult={transactionQuery}
        render={(data) => <PaymentHistory data={data} currentSub={currentSub} />}
      />
    </>
  );
};

export default DetailsPage;
