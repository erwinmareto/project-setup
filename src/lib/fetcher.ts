import { ACCESS_TOKEN_KEY } from './constants';
import { getCookie } from './cookies';

interface FetcherProps extends RequestInit {
  url: string;
  filters?: URLSearchParams;
  options?: Record<string, unknown>;
  //   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  //   body?: Record<string, unknown>;
  //   headers?: Record<string, string>;
  //   params?: Record<string, unknown>;
}

export const fetcher = async ({ method = 'GET', url, filters, ...args }: FetcherProps) => {
  const accessToken = getCookie(ACCESS_TOKEN_KEY as string);

  const finalURL = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`);
  console.log(finalURL, '><><><><><><><><>');

  if (filters) {
    filters.forEach((value, key) => {
      finalURL.searchParams.append(key, value as string);
    });
  }
  console.log(finalURL.toString(), '<<<<<<<<<<FINAL URL FOR FETCH,');

  const headers: HeadersInit = {
    // 'Content-Type': 'application/json',
    // authorization: `Bearer ${accessToken}`,
    ...(!args?.options?.isFormData && { 'Content-Type': 'application/json' }),
    ...args?.headers
  };

  if (accessToken) {
    Object.assign(headers, { authorization: `Bearer ${accessToken}` });
  }

  try {
    const response = await fetch(finalURL, {
      method,
      headers,
      //   headers: {
      //     // 'Content-Type': 'application/json',
      //     'authorization': `Bearer ${accessToken}`,
      //     ...(!args?.options?.isFormData && { 'Content-Type': 'application/json' }),
      //     ...args?.headers
      //   },
      // body: JSON.stringify(options.body),
      ...args
    });

    const data = await response.json();
    console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(headers, 'HEADERSSSSSSSSSSSSSSS');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
