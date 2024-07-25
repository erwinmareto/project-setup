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
          render={(users) => (
            <>
              {users.map((user) => (
                <li className="font-light" key={user.email}>
                  {user.name}
                </li>
              ))}
            </>
          )}
        />
      </ul>
    </div>
  );
};

export default HomePage;
