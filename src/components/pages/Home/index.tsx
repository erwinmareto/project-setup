'use client';

import ReactQuery from '@/components/parts/ReactQuery';
import { Skeleton } from '@/components/ui/skeleton';
import { useComments } from '@/queries/users';

const HomePage = () => {
  // const usersQuery = useUsers();
  const commentsQuery = useComments();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Users list</h1>

      <ul className="font-light">
        <ReactQuery
          queryResult={commentsQuery}
          renderLoading={
            <div className="flex flex-col gap-4">
              <Skeleton className="h-4 w-[100px] bg-primary-50" />
              <Skeleton className="h-4 w-[100px] bg-secondary-0" />
              <Skeleton className="h-4 w-[100px] bg-secondary-20" />
              <Skeleton className="h-4 w-[100px] bg-secondary-40" />
              <Skeleton className="h-4 w-[100px] bg-secondary-45" />
              <Skeleton className="h-4 w-[100px] bg-secondary-foreground" />
              <Skeleton className="h-4 w-[100px] bg-primary-50" />
              <Skeleton className="h-4 w-[100px] bg-primary-70" />
            </div>
          }
          render={(comments) => (
            <>
              {comments.map((comment: any) => (
                <div key={comment.id}>
                  <li className="font-semibold">Post ID: {comment.postId}</li>
                  <li className="font-light">{comment.body}</li>
                </div>
              ))}
            </>
          )}
        />
      </ul>
    </div>
  );
};

export default HomePage;
