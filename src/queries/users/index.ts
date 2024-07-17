import { useMutation, useQuery } from '@tanstack/react-query';

import { getUsers, getWithSearchParams } from '@/repositories/users';

export const getUsersKey = () => ['users'];

export const useUsers = () => {
  const result = useQuery({
    queryKey: getUsersKey(),
    queryFn: getUsers
  });

  return result;
};

export const useSearch = (filters: URLSearchParams) => {
  const result = useQuery({
    queryKey: ['search', filters],
    queryFn: () => getWithSearchParams(filters)
  });

  return result;
};

export const useMutateSearch = (filters: URLSearchParams) => {
  useMutation({
    mutationKey: ['searchMutate'],
    mutationFn: () => getWithSearchParams(filters)
  });
};
