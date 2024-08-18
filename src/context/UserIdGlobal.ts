import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserId = create(
  persist(
    (set) => ({
      userId: '',
      setUserId: (userId: string) => set({ userId })
    }),
    {
      name: 'user-id', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
