import { Cycles, SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

export type UserIdContextType = {
  userId: string;
  setUserId: (userId: string) => void;
};

export type Step1ContextType = {
  icon: string;
  appName: string;
  category: SubscriptionCategory;
  setIcon: (icon: string) => void;
  setAppName: (appName: string) => void;
  setCategory: (category: SubscriptionCategory) => void;
  resetStep1Global: () => void;
};

export type Step2ContextType = {
  cycle: Cycles;
  paymentStart: Date | undefined;
  paymentEnd: Date | undefined;
  price: number;
  paymentMethod: string;
  setCycle: (cycle: Cycles) => void;
  setPaymentStart: (paymentStart: Date) => void;
  setPaymentEnd: (paymentEnd: Date) => void;
  setPrice: (price: number) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  resetStep2Global: () => void;
};

export type Step3ContextType = {
  time: number;
  email: string;
  setTime: (time: number) => void;
  setEmail: (email: string) => void;
  resetStep3Global: () => void;
};
