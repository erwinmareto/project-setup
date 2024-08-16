import { Cycles, SubscriptionCategory, SubStatus } from '@/components/parts/SubscriptionTable/types';

export interface SubscriptionPayload {
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  nextPayment: string;
  cycle: Cycles;
  payment: string;
  status: SubStatus;
}
