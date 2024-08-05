import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { listColumns } from '@/components/parts/SubscriptionTable/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockData } from '@/lib/mockData';

export default function MySubscriptionPage() {
  return (
    <section className="col-span-12 rounded-lg">
      <h6 className="font-semibold text-primary-80 text-heading-6 mb-4">My Subscription</h6>
      <article className="bg-primary-0 px-5 py-2">
        <Tabs defaultValue="list">
          <TabsList className="mb-6">
            <TabsTrigger value="list">List of Subscriptions</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <SubscriptionTable columns={listColumns} data={mockData} variant="list" />
          </TabsContent>
          <TabsContent value="history">Change your password here.</TabsContent>
        </Tabs>
      </article>
    </section>
  );
}
