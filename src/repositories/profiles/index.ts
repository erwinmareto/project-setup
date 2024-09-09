import { fetcher } from '@/lib/fetcher';

export const getProfileById = async () => {
  const response = await fetcher({
    url: `/user/profile`
  });

  return response;
};

export const editProfile = async (payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: `/user/update-profile`,
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  return response;
};
