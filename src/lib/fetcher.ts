interface FetcherProps extends RequestInit {
  url: string;
  filters?: URLSearchParams;
  //   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  //   body?: Record<string, unknown>;
  //   headers?: Record<string, string>;
  //   params?: Record<string, unknown>;
}

export const fetcher = async ({ method = 'GET', url, filters, ...args }: FetcherProps) => {
  const finalURL = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`);
  console.log(finalURL, '><><><><><><><><>');

  if (filters) {
    filters.forEach((value, key) => {
      finalURL.searchParams.append(key, value as string);
    });
  }
  console.log(finalURL.toString(), '<<<<<<<<<<<<<<<<<<<<<<<,');

  try {
    const response = await fetch(finalURL, {
      method,
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      //   },
      //   body: JSON.stringify(options.body),
      ...args
    });

    const data = await response.json();
    console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
