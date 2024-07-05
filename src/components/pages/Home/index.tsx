'use client';

import ReactQuery from '@/components/parts/ReactQuery';
import { Skeleton } from '@/components/ui/skeleton';
import { useUsers } from '@/queries/users';

const HomePage = () => {
  const usersQuery = useUsers();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Users list</h1>

      <ul className="font-light">
        <ReactQuery
          queryResult={usersQuery}
          renderLoading={
            <div className="flex flex-col gap-4">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          }
          render={(users) => (
            <>
              {users.map((user) => (
                <li key={user.email}>{user.name}</li>
              ))}
            </>
          )}
        />
      </ul>
    </div>
  );
};

export default HomePage;
