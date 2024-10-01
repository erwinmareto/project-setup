import { fetcher } from '@/lib/fetcher';

export const login = async (payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: '/auth/login',
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return response;
};

export const register = async (payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: '/auth/register',
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return response;
};
