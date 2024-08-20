import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Step3ContextType } from './types';

export const useStep3Form = create(
  persist<Step3ContextType>(
    (set) => ({
      time: 0,
      email: '',
      setTime: (time: number) => set({ time }),
      setEmail: (email: string) => set({ email }),
      resetStep3Global: () => set({ time: 0, email: '' })
    }),
    {
      name: 'step-3-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
