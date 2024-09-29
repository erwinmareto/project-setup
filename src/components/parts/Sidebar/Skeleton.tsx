import { Skeleton } from '@/components/ui/skeleton';

const SubCardSkeleton = () => {
  return (
    <article className="flex justify-between items-center gap-10">
      <section className="flex justify-center items-center gap-3 py-3 group">
        <Skeleton className="w-[42px] h-[42px] rounded-lg" />
        <div>
          <Skeleton className="w-24 h-5 mb-1" />
          <Skeleton className="w-20 h-4" />
        </div>
      </section>
      <section className="flex flex-col flex-shrink-0 justify-end items-center">
        <Skeleton className="w-24 h-4 mb-1" />
        <Skeleton className="w-20 h-5" />
      </section>
    </article>
  );
};

export default SubCardSkeleton;
