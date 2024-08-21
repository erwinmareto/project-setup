import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

import { Step1ContextType } from './types';

export const useStep1Form = create(
  persist<Step1ContextType>(
    (set) => ({
      icon: '',
      appName: '',
      category: undefined,
      setIcon: (icon: string) => set({ icon }),
      setAppName: (appName: string) => set({ appName }),
      setCategory: (category: SubscriptionCategory) => set({ category }),
      resetStep1Global: () => set({ icon: '', appName: '', category: undefined })
    }),
    {
      name: 'step-1-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
