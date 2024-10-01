'use client';

import { useParams } from 'next/navigation';

import PaymentHistory from '@/components/parts/PaymentHistory';
import PaymentHistorySkeleton from '@/components/parts/PaymentHistory/Skeleton';
import ReactQuery from '@/components/parts/ReactQuery';
import SubscriptionDetail from '@/components/parts/SubscriptionDetail';
import SubscriptionDetailSkeleton from '@/components/parts/SubscriptionDetail/Skeleton';
import { useSubscriptionById } from '@/queries/subscriptions';
import { useGetTransactionsBySubId } from '@/queries/transactions';

const DetailsPage = () => {
  const { id } = useParams();
  const subscriptionByIdQuery = useSubscriptionById(id as string);
  const currentSubId = subscriptionByIdQuery.data?.id;
  const transactionQuery = useGetTransactionsBySubId(currentSubId?.toString());

  return (
    <>
      <ReactQuery
        queryResult={subscriptionByIdQuery}
        render={(data) => <SubscriptionDetail data={data} />}
        renderLoading={<SubscriptionDetailSkeleton />}
      />
      <ReactQuery
        queryResult={transactionQuery}
        render={(data) => <PaymentHistory data={data} />}
        renderLoading={<PaymentHistorySkeleton />}
      />
    </>
  );
};

export default DetailsPage;
