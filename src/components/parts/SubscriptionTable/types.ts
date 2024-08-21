export type SubscriptionCategory =
  | 'entertainment'
  | 'work'
  | 'home'
  | 'games'
  | 'education'
  | 'health'
  | 'others'
  | undefined;

export type SubStatus = 'inactive' | 'upcoming' | 'active' | 'overdue';

export type Cycles = 'daily' | 'weekly' | 'monthly' | '3 months' | '6 months' | 'yearly' | undefined;

export type Subscription = {
  id: string;
  icon: string;
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  startPayment: string;
  nextPayment: string;
  status: SubStatus;
  cycle: Cycles;
  paymentMethod: string;
  interval: number;
  email: string;
};

export type Transaction = {
  id: string;
  icon: string;
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  status: SubStatus;
  payment: string;
  paymentDate: string;
};
