import { CalendarCheck, CalendarClock, CalendarX, TrendingUp } from 'lucide-react';

import OverviewCard from '@/components/parts/OverviewCard';
import PaymentChart from '@/components/parts/PaymentChart';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { dashboardColumns } from '@/components/parts/SubscriptionTable/columns';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { mockData } from '@/lib/mockData';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">Overview</h6>
        <div className="flex gap-4 mt-4 overflow-x-auto">
          <OverviewCard
            status="success"
            icon={<CalendarCheck />}
            totalSubscriptions={10}
            title="Active Subscriptions"
            description="Manage all your active subscriptions efficiently"
            link="/active"
          />
          <OverviewCard
            status="warning"
            icon={<CalendarClock />}
            totalSubscriptions={6}
            title="Upcoming Subscriptions"
            description="Manage all your upcoming subscriptions efficiently"
            link="/upcoming"
          />
          <OverviewCard
            status="destructive"
            icon={<CalendarX />}
            totalSubscriptions={8}
            title="Inactive Subscriptions"
            description="Manage all your inactive subscriptions efficiently"
            link="/inactive"
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">My Subscriptions</h6>
        <div className="bg-primary-0 p-5 mt-4">
          <SubscriptionTable columns={dashboardColumns} data={mockData} />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 lg:text-heading-6">Payment History</h6>
        <div className="bg-primary-0 p-5 mt-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-primary-80 text-body-xs md:text-body-lg">Time Frame</p>
              <Select>
                <SelectTrigger className="bg-muted">
                  <SelectValue placeholder="This year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">2023-2024</SelectItem>
                    <SelectItem value="banana">20222-2023</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-7">
              <div>
                <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">
                  Spent Last Year
                </p>
                <h4 className="font-semibold text-heading-6 md:text-heading-4">Rp 575.000</h4>
              </div>
              <div>
                <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">
                  Spent This Year
                </p>
                <div className="flex justify-center items-center gap-2">
                  <h4 className="font-semibold text-heading-6 md:text-heading-4">Rp 825.000</h4>

                  <Badge variant="active" className="text-[0.5rem] h-5 border-success-foreground">
                    <TrendingUp className="w-3 h-3" /> + 20
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <PaymentChart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
