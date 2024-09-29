import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const ChartSkeleton = ({ isSpendings }: { isSpendings?: boolean }) => {
  return (
    <Card className="bg-primary-0 p-3 md:p-5 mt-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24 md:h-5 md:w-32" />
          <Skeleton className="h-8 w-28 md:h-10 md:w-36" />
        </div>
        <div className="flex items-start gap-3 md:gap-7">
          <div>
            <Skeleton className="h-3 w-10 md:h-4 md:w-28 mb-1" />
            <Skeleton className="h-5 w-12 md:h-7 md:w-32" />
          </div>
          {isSpendings && (
            <div>
              <Skeleton className="h-3 w-10 md:h-4 md:w-28 mb-1" />
              <div className="flex justify-center items-center gap-2">
                <Skeleton className="h-5 w-12 md:h-7 md:w-32" />
                <Skeleton className="h-5 w-5 md:h-7 md:w-14" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Separator className="my-4" />
      <div className="mt-4">
        <Skeleton className="h-40 w-full" />
      </div>
    </Card>
  );
};

export default ChartSkeleton;
