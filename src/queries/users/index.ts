import { useQuery } from '@tanstack/react-query';

import { getComments, getUsers } from '@/repositories/users';

export const getUsersKey = () => ['users'];

export const useUsers = () => {
  const result = useQuery({
    queryKey: getUsersKey(),
    queryFn: getUsers
  });

  return result;
};

export const useComments = () => {
  const result = useQuery({
    queryKey: ['comments'],
    queryFn: getComments
  });

  return result;
};
