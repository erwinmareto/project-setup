import { fetcher } from '@/lib/fetcher';

import { User } from './types';

export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json() as Promise<User[]>
  );

  return response;
};

export const getWithSearchParams = async (filters: URLSearchParams) => {
  const response = await fetcher({
    url: '/comments',
    filters: filters
  });

  return response;
};

export const mutateSearch = async (filters: URLSearchParams) => {
  const response = await fetcher({
    method: 'POST',
    url: '/comments',
    filters: filters
  });

  return response;
};
