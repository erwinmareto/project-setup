'use client';

import { differenceInDays } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ReactQuery from '@/components/parts/ReactQuery';
import { Subscription, Transaction } from '@/components/parts/SubscriptionTable/types';
import { Separator } from '@/components/ui/separator';
import { useAllSubscriptions } from '@/queries/subscriptions';
import { useAllTransactions } from '@/queries/transactions';

import SubCard from './SubCard';

const Sidebar = () => {
  const allSubscripitonsQuery = useAllSubscriptions();
  const allTransactionsQuery = useAllTransactions();

  const getExpiringSubs = (subs: Subscription[]) => {
    const filteredSubs = subs.filter(
      (sub: Subscription) =>
        differenceInDays(sub.nextPayment, new Date()) > 0 && differenceInDays(sub.nextPayment, new Date()) <= 7
    );
    return filteredSubs;
  };

  const getWeekOldTransactions = (transactions: Transaction[]) => {
    const weekOld = transactions.filter(
      (transaction: Transaction) => differenceInDays(new Date(), transaction.paymentDate) <= 7
    );

    return weekOld;
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
                  return filtered.map((sub, index) => (
                    <>
                      <SubCard
                        key={sub.id}
                        id={sub.id}
                        icon={sub.icon}
                        title={sub.appName}
                        category={sub.category}
                        paymentDate={sub.nextPayment}
                      />
                      {index < filtered.length - 1 && <Separator />}
                    </>
                  ));
                }}
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
                  const weekOldTransactions = getWeekOldTransactions(data);
                  return weekOldTransactions.map((transaction) => (
                    <>
                      <SubCard
                        key={transaction.id}
                        icon={transaction.icon}
                        title={transaction.appName}
                        category={transaction.category}
                        paymentDate={transaction.paymentDate}
                        price={transaction.pricing}
                        isHistory
                      />

                      <Separator />
                    </>
                  ));
                }}
              />

              <Link href="/my-subscriptions?tabs=history" className="link py-3">
                <p>See all History Payments</p>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
