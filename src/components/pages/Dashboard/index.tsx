'use client';

import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';

import ChartInfo from '@/components/parts/ChartInfo';
import OverviewCard from '@/components/parts/OverviewCard';
import ReactQuery from '@/components/parts/ReactQuery';
import SpendingsChart from '@/components/parts/SpendingsChart';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { dashboardColumns } from '@/components/parts/SubscriptionTable/columns';
import { Subscription, SubStatus } from '@/components/parts/SubscriptionTable/types';
import { useAllSubscriptions } from '@/queries/subscriptions';

const Dashboard = () => {
  const allSubscripitonsQuery = useAllSubscriptions();

  const getStatusCount = (subs: Subscription[], status: SubStatus) => {
    const filteredSubs = subs.filter((sub: Subscription) => sub.status === status);
    return filteredSubs.length;
  };

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">Overview</h6>
        <div className="flex flex-col flex-1 gap-4 mt-4 lg:flex-row">
          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="success"
                icon={<CalendarCheck />}
                totalSubscriptions={getStatusCount(data, 'active')}
                title="Active Subscriptions"
                description="Manage all your active subscriptions efficiently"
                link="?status=active"
              />
            )}
          />

          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="warning"
                icon={<CalendarClock />}
                totalSubscriptions={getStatusCount(data, 'upcoming') + getStatusCount(data, 'overdue')}
                title="Upcoming Subscriptions"
                description="Manage all your upcoming subscriptions efficiently"
                link="?status=upcoming"
              />
            )}
          />

          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="destructive"
                icon={<CalendarX />}
                totalSubscriptions={getStatusCount(data, 'inactive')}
                title="Inactive Subscriptions"
                description="Manage all your inactive subscriptions efficiently"
                link="?status=inactive"
              />
            )}
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">My Subscriptions</h6>
        <div className="bg-primary-0 p-5 mt-4">
          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(subData) => <SubscriptionTable columns={dashboardColumns} data={subData} variant="dashboard" />}
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 lg:text-heading-6">Payment History</h6>
        <ChartInfo total="spendings">
          <SpendingsChart />
        </ChartInfo>
      </section>
    </div>
  );
};

export default Dashboard;
