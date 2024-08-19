import { fetcher } from '@/lib/fetcher';

export const getProfileById = async (id: string) => {
  const response = await fetcher({
    url: `/profiles/${id}`
  });

  return response;
};

export const editProfile = async (id: string, payload: Record<string, unknown>) => {
  console.log(payload, 'payload');
  console.log(id, 'idddddddddddd');

  const response = await fetcher({
    url: `/profiles/${id}`,
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  return response;
};
