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
  uer_id: string;
  icon: string;
  app_name: string;
  category: SubscriptionCategory;
  pricing: number;
  start_payment: string;
  next_payment: string;
  status: SubStatus;
  cycle: Cycles;
  payment_method: string;
  interval_days: number;
  email: string;
};

export type Transaction = {
  id: string;
  icon: string;
  app_name: string;
  category: SubscriptionCategory;
  pricing: number;
  status: SubStatus;
  payment_method: string;
  payment_date: string;
};
