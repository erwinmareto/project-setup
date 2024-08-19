'use client';

import { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import UserIdProvider from '@/context/UserIdContext';
import { queryClientConfig } from '@/lib/queryClient';

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  return (
    <QueryClientProvider client={queryClient}>
      <UserIdProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </UserIdProvider>
    </QueryClientProvider>
  );
};
export default Providers;
