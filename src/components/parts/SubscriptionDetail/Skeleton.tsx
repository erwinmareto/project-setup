import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const SubscriptionDetailSkeleton = () => {
  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-md" />
          <Skeleton className="w-48 h-6" />
        </div>
        <Skeleton className="w-10 h-10 rounded-md" />
      </header>

      <article className="flex flex-col gap-7 mt-7">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Skeleton className="w-[2.65rem] h-[2.65rem] rounded-xl md:w-[3.25rem] md:h-[3.25rem]" />
            <div>
              <Skeleton className="w-32 h-6 mb-1" />
              <Skeleton className="w-24 h-4" />
            </div>
          </div>
          <div className="flex gap-2 max-md:justify-between">
            <Skeleton className="w-32 h-10 rounded-md" />
            <Skeleton className="w-40 h-10 rounded-md" />
          </div>
        </div>

        <Card className="flex flex-col justify-between p-4 md:h-20 md:flex-row md:items-center max-md:gap-4">
          <div>
            <Skeleton className="w-16 h-4 mb-1" />
            <Skeleton className="w-20 h-6" />
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <Separator orientation="horizontal" className="md:hidden" />
          <div>
            <Skeleton className="w-28 h-4 mb-1" />
            <Skeleton className="w-24 h-6" />
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <Separator orientation="horizontal" className="md:hidden" />
          <div>
            <Skeleton className="w-24 h-4 mb-1" />
            <Skeleton className="w-28 h-6" />
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <Separator orientation="horizontal" className="md:hidden" />
          <div>
            <Skeleton className="w-16 h-4 mb-1" />
            <Skeleton className="w-20 h-6" />
          </div>
        </Card>

        <Separator />

        <div className="flex gap-7 md:gap-[6rem]">
          <div className="flex flex-col gap-3">
            {[...Array(7)].map((_, index) => (
              <Skeleton key={`label-${index}`} className="w-32 h-5" />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[...Array(7)].map((_, index) => (
              <Skeleton key={`value-${index}`} className="w-40 h-5" />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SubscriptionDetailSkeleton;
