import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Cycles } from '@/components/parts/SubscriptionTable/types';

import { Step2ContextType } from './types';

export const useStep2Form = create(
  persist<Step2ContextType>(
    (set) => ({
      cycle: undefined,
      paymentStart: undefined,
      paymentEnd: undefined,
      price: 0,
      paymentMethod: '',
      setCycle: (cycle: Cycles) => set({ cycle }),
      setPaymentStart: (paymentStart: Date) => set({ paymentStart }),
      setPaymentEnd: (paymentEnd: Date) => set({ paymentEnd }),
      setPrice: (price: number) => set({ price }),
      setPaymentMethod: (paymentMethod: string) => set({ paymentMethod }),
      resetStep2Global: () =>
        set({ cycle: undefined, paymentStart: undefined, paymentEnd: undefined, price: 0, paymentMethod: '' })
    }),
    {
      name: 'step-2-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
