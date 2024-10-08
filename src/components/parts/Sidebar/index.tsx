'use client';

import { differenceInDays } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ReactQuery from '@/components/parts/ReactQuery';
import { Subscription, Transaction } from '@/components/parts/SubscriptionTable/types';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllSubscriptions } from '@/queries/subscriptions';
import { useAllTransactions } from '@/queries/transactions';

import SubCardSkeleton from './Skeleton';
import SubCard from './SubCard';

const Sidebar = () => {
  const allSubscripitonsQuery = useAllSubscriptions();
  const allTransactionsQuery = useAllTransactions();

  const getExpiringSubs = (subs: Subscription[]) => {
    const filteredSubs = subs.filter((sub: Subscription) => differenceInDays(sub.next_payment, new Date()) <= 7);
    const noInactive = filteredSubs.filter((sub: Subscription) => sub.status !== 'inactive');
    return noInactive;
  };

  const getLast5Transactions = (subs: Transaction[]) => {
    const totalSubs = subs.length;
    const last5 = subs.slice(totalSubs - 5);

    return last5;
  };

  return (
    <aside className="flex flex-col gap-6 lg:grid lg:col-span-3">
      <div className="flex flex-col items-center gap-6">
        <article className="flex flex-col gap-3">
          <h6 className="font-medium text-body-lg md:text-heading-6">Next Payment</h6>
          <div className=" bg-primary-0 rounded-xl w-[21rem]">
            <div className="px-5">
              <ReactQuery
                queryResult={allSubscripitonsQuery}
                render={(data) => {
                  const filtered = getExpiringSubs(data);
                  if (filtered.length === 0)
                    return (
                      <p className="font-medium text-body-xs text-center py-4">
                        Subscriptions with 7 days remaining will show up here
                      </p>
                    );
                  return filtered.map((sub, index) => (
                    <>
                      <SubCard
                        key={sub.id}
                        id={sub.id}
                        icon={sub.icon}
                        title={sub.app_name}
                        category={sub.category}
                        paymentDate={sub.next_payment}
                      />
                      {index < filtered.length - 1 && <Separator />}
                    </>
                  ));
                }}
                renderLoading={[...Array(5)].map((_, index) => (
                  <SubCardSkeleton key={index} />
                ))}
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-3">
          <h6 className="font-medium text-body-lg md:text-heading-6">Payment History</h6>
          <div className="w-[21rem] bg-primary-0 rounded-xl">
            <div className="px-5">
              <ReactQuery
                queryResult={allTransactionsQuery}
                render={(data) => {
                  const last5 = getLast5Transactions(data);
                  if (last5.length === 0)
                    return <p className="font-medium text-body-xs text-center py-4">No payment history yet.</p>;
                  return last5.map((transaction) => (
                    <>
                      <SubCard
                        key={transaction.id}
                        icon={transaction.icon}
                        title={transaction.app_name}
                        category={transaction.category}
                        paymentDate={transaction.payment_date}
                        price={transaction.pricing}
                        isHistory
                      />

                      <Separator />
                    </>
                  ));
                }}
                renderLoading={[...Array(5)].map((_, index) => (
                  <SubCardSkeleton key={index} />
                ))}
              />

              {allTransactionsQuery.isLoading ? (
                <div className="flex justify-center items-center">
                  <Skeleton className="w-2/3 h-4 my-3" />
                </div>
              ) : (
                allTransactionsQuery.data?.length !== 0 && (
                  <Link href="/my-subscriptions?tabs=history" className="link py-3">
                    <p>See all History Payments</p>
                    <ArrowUpRight />
                  </Link>
                )
              )}
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
