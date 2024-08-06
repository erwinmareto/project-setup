export type SubscriptionCategory =
  | 'entertainment'
  | 'work'
  | 'home'
  | 'games'
  | 'education'
  | 'health'
  | 'others';

export type SubStatus = 'inactive' | 'upcoming' | 'active' | 'overdue';

export type Cycles = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type Subscription = {
  id: string;
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  nextPayment: Date;
  status: SubStatus;
  cycle: Cycles;
  payment: string;
};

export type Transaction = {
  id: string;
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  status: SubStatus;
  payment: string;
  paymentDate: Date;
};
