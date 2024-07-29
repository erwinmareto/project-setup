import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-orange-400 gap-6 px-6 py-3 lg:grid lg:col-span-3">
      <div className="flex flex-col gap-6">
        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-normal">Next Payment</h6>
          <Card>
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
            <Separator />
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
            <Separator />
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
          </Card>
        </article>

        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-normal">Payment History</h6>
          <Card>
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
            <Separator />
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
            <Separator />
            <div className="bg-white">
              <h3 className="text-xl">App name</h3>
              <Badge className="bg-red-200 text-red-700">7 Days Left</Badge>
            </div>
          </Card>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
