'use client';

import { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Step1Provider from '@/context/Step1Context';
import Step2Provider from '@/context/Step2Context';
import Step3Provider from '@/context/Step3Context';
import { queryClientConfig } from '@/lib/queryClient';

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  return (
    <QueryClientProvider client={queryClient}>
      <Step1Provider>
        <Step2Provider>
          <Step3Provider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </Step3Provider>
        </Step2Provider>
      </Step1Provider>
    </QueryClientProvider>
  );
};
export default Providers;
