import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const OverviewCardSkeleton = () => {
  return (
    <Card className="border-none w-full">
      <CardContent className="py-5">
        <CardTitle className="flex justify-between items-center gap-4">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-10 h-10 rounded-md" />
        </CardTitle>

        <Skeleton className="w-full h-8 my-2" />
        <Skeleton className="w-full h-4 my-2" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-full h-4" />
      </CardFooter>
    </Card>
  );
};

export default OverviewCardSkeleton;
