import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStep3Form = create(
  persist(
    (set) => ({
      time: 1,
      email: '',
      setTime: (time: number) => set({ time }),
      setEmail: (email: string) => set({ email })
    }),
    {
      name: 'step-3-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
