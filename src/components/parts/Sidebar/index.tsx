'use client';

import { differenceInDays } from 'date-fns';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ReactQuery from '@/components/parts/ReactQuery';
import { Subscription } from '@/components/parts/SubscriptionTable/types';
import { Separator } from '@/components/ui/separator';
import { useAllSubscriptions } from '@/queries/subscriptions';

import SubCard from './SubCard';

const Sidebar = () => {
  const allSubscripitonsQuery = useAllSubscriptions();

  const getExpiringSubs = (subs: Subscription[]) => {
    const filteredSubs = subs.filter(
      (sub: Subscription) =>
        differenceInDays(sub.nextPayment, new Date()) > 0 && differenceInDays(sub.nextPayment, new Date()) <= 7
    );

    return filteredSubs;
  };

  return (
    <aside className="flex flex-col gap-6 lg:grid lg:col-span-3">
      <div className="flex flex-col items-center gap-6">
        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-semibold">Next Payment</h6>
          <div className=" bg-primary-0 rounded-xl w-[21rem]">
            <div className="px-5">
              <ReactQuery
                queryResult={allSubscripitonsQuery}
                render={(data) => {
                  const filtered = getExpiringSubs(data);
                  return filtered.map((sub, index) => (
                    <>
                      <SubCard key={sub.id} title={sub.appName} category={sub.category} paymentDate={sub.nextPayment} />
                      {index < filtered.length - 1 && <Separator />}
                    </>
                  ));
                }}
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-semibold">Payment History</h6>
          <div className="w-[21rem] bg-primary-0 rounded-xl">
            <div className="px-5">
              {/* <SubCard history />
              <Separator />
              <SubCard history />
              <Separator />
              <SubCard history /> */}

              <Separator />
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
