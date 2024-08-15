'use client';

import { useSearchParams } from 'next/navigation';

import ChartInfo from '@/components/parts/ChartInfo';
import CostChart from '@/components/parts/CostChart';
import ReactQuery from '@/components/parts/ReactQuery';
import SpendingsChart from '@/components/parts/SpendingsChart';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { listColumns, transactionColumns } from '@/components/parts/SubscriptionTable/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAllSubscriptions } from '@/queries/subscriptions';
import { useAllTransactions } from '@/queries/transactions';

const MySubscriptions = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get('tabs');

  const subscriptionsQuery = useAllSubscriptions();
  const transactionsQuery = useAllTransactions();

  return (
    <section className="col-span-12 rounded-lg">
      <h6 className="font-semibold text-primary-80 text-heading-6 mb-4">My Subscription</h6>
      <article className="bg-primary-0 px-5 py-2">
        <Tabs defaultValue={selectedTab === 'history' ? selectedTab : 'list'}>
          <TabsList className="mb-6">
            <TabsTrigger value="list">List of Subscriptions</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <ReactQuery
              queryResult={subscriptionsQuery}
              render={(subscriptionData) => (
                <SubscriptionTable columns={listColumns} data={subscriptionData} variant="list" />
              )}
            />
          </TabsContent>
          <TabsContent value="history">
            <div className="flex flex-col mb-9 lg:grid lg:grid-cols-12">
              <section className="lg:col-span-7">
                <ChartInfo total="spendings">
                  <SpendingsChart />
                </ChartInfo>
              </section>
              <section className="lg:col-span-5">
                <ChartInfo total="cost">
                  <CostChart />
                </ChartInfo>
              </section>
            </div>

            <ReactQuery
              queryResult={transactionsQuery}
              render={(transactionData) => (
                <SubscriptionTable columns={transactionColumns} data={transactionData} variant="transactions" />
              )}
            />
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
};

export default MySubscriptions;
