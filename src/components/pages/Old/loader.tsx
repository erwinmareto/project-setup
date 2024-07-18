import { Skeleton } from '@/components/ui/skeleton';

const SearchLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Skeleton className="h-4 w-10 bg-blue-200" />
        <Skeleton className="h-4 w-10 bg-blue-200" />
      </div>
      <Skeleton className="h-8 w-[800px] bg-blue-200" />
      <Skeleton className="h-4 w-[400px] bg-blue-200" />
      <Skeleton className="h-4 w-[400px] bg-blue-200" />
    </div>
  );
};

export default SearchLoader;
