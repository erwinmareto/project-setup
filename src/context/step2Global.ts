import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStep2Form = create(
  persist(
    (set) => ({
      cycle: '',
      paymentStart: new Date(),
      paymentEnd: new Date(),
      price: 0,
      paymentMethod: '',
      setCycle: (cycle: string) => set({ cycle }),
      setPaymentStart: (paymentStart: Date) => set({ paymentStart }),
      setPaymentEnd: (paymentEnd: Date) => set({ paymentEnd }),
      setPrice: (price: number) => set({ price }),
      setPaymentMethod: (paymentMethod: string) => set({ paymentMethod })
    }),
    {
      name: 'step-2-data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
