import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SubscriptionTableSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 lg:w-1/3 max-md:max-w-[11.25rem]">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-[8rem] md:w-full" />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
          <div className="flex gap-2 lg:hidden">
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
      <section className="rounded-md border">
        <Table>
          <TableHeader className="bg-primary-20">
            <TableRow>
              {[...Array(5)].map((_, index) => (
                <TableHead key={index}>
                  <Skeleton className="h-6 w-24" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {[...Array(5)].map((_, cellIndex) => (
                  <TableCell key={cellIndex}>
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex justify-center items-center gap-6">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-10 w-16" />
        </div>
        <div className="flex items-center justify-end gap-8">
          <Skeleton className="h-6 w-40 max-md:hidden" />
          <div className="flex items-center justify-end gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionTableSkeleton;
