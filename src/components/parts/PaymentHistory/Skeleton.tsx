import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const PaymentHistorySkeleton = () => {
  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-4">
      <article className="flex flex-col gap-5">
        <Skeleton className="w-48 h-6" />
        <Card className="flex flex-col justify-center items-center text-center gap-4 py-10 px-24">
          <Skeleton className="w-40 h-10" />
          <Skeleton className="w-48 h-5" />
          <Skeleton className="w-28 h-10 rounded-md" />
        </Card>
        <Separator />
        <div className="flex flex-col gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Skeleton className="w-[2.5rem] h-[2.5rem] rounded-xl md:w-[3.25rem] md:h-[3.25rem]" />
                <div>
                  <Skeleton className="w-32 h-5 mb-1" />
                  <Skeleton className="w-24 h-4" />
                </div>
              </div>
              <Skeleton className="w-24 h-6" />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PaymentHistorySkeleton;
