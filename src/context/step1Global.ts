import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

export const useStep1Form = create(
  persist(
    (set) => ({
      icon: '',
      appName: '',
      category: '',
      setIcon: (icon: string) => set({ icon }),
      setAppName: (appName: string) => set({ appName }),
      setCategory: (category: SubscriptionCategory) => set({ category })
    }),
    {
      name: 'step-1-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
