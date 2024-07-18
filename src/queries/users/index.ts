import { useMutation, useQuery } from '@tanstack/react-query';

import { getUsers, getWithSearchParams } from '@/repositories/users';

export const getUsersKey = () => ['users'];
export const getSearchKeys = (filters: URLSearchParams) => {
  let keys = ['search'];
  filters.forEach((value) => {
    keys.push(value);
  });
  return keys;
};

export const useUsers = () => {
  const result = useQuery({
    queryKey: getUsersKey(),
    queryFn: getUsers
  });

  return result;
};

export const useSearch = (filters: URLSearchParams) => {
  const result = useQuery({
    queryKey: getSearchKeys(filters),
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
