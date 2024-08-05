import { Subscription } from '@/components/parts/SubscriptionTable/types';

export const mockData: Subscription[] = [
  {
    id: '1',
    appName: 'Netflix',
    category: 'entertainment',
    pricing: 1000,
    nextPayment: new Date('2024-08-15'),
    status: 'active',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '2',
    appName: 'Spotify',
    category: 'entertainment',
    pricing: 500,
    nextPayment: new Date('2024-09-01'),
    status: 'active',
    cycle: 'yearly',
    payment: 'paypal'
  },
  {
    id: '3',
    appName: 'Microsoft Office 365',
    category: 'work',
    pricing: 15,
    nextPayment: new Date('2024-07-31'),
    status: 'overdue',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '4',
    appName: 'Amazon Prime',
    category: 'entertainment',
    pricing: 200,
    nextPayment: new Date('2024-09-20'),
    status: 'active',
    cycle: 'yearly',
    payment: 'debit card'
  },
  {
    id: '5',
    appName: 'Duolingo Plus',
    category: 'education',
    pricing: 220,
    nextPayment: new Date('2024-08-10'),
    status: 'active',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '6',
    appName: 'Adobe Creative Cloud',
    category: 'work',
    pricing: 30,
    nextPayment: new Date('2024-08-05'),
    status: 'active',
    cycle: 'yearly',
    payment: 'paypal'
  },
  {
    id: '7',
    appName: 'Fitbit Premium',
    category: 'health',
    pricing: 10,
    nextPayment: new Date('2024-08-25'),
    status: 'inactive',
    cycle: 'monthly',
    payment: 'debit card'
  },
  {
    id: '8',
    appName: 'HBO Max',
    category: 'entertainment',
    pricing: 15,
    nextPayment: new Date('2024-09-05'),
    status: 'active',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '9',
    appName: 'Headspace',
    category: 'health',
    pricing: 7,
    nextPayment: new Date('2024-08-12'),
    status: 'active',
    cycle: 'weekly',
    payment: 'paypal'
  },
  {
    id: '10',
    appName: 'LinkedIn Learning',
    category: 'education',
    pricing: 20,
    nextPayment: new Date('2024-09-10'),
    status: 'upcoming',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '11',
    appName: 'Google Workspace',
    category: 'work',
    pricing: 6,
    nextPayment: new Date('2024-08-18'),
    status: 'active',
    cycle: 'yearly',
    payment: 'debit card'
  },
  {
    id: '12',
    appName: 'PlayStation Plus',
    category: 'games',
    pricing: 10,
    nextPayment: new Date('2024-08-01'),
    status: 'active',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '13',
    appName: 'Apple Music',
    category: 'entertainment',
    pricing: 10,
    nextPayment: new Date('2024-09-15'),
    status: 'active',
    cycle: 'monthly',
    payment: 'credit card'
  },
  {
    id: '14',
    appName: 'Canva Pro',
    category: 'work',
    pricing: 12,
    nextPayment: new Date('2024-08-03'),
    status: 'active',
    cycle: 'monthly',
    payment: 'paypal'
  },
  {
    id: '15',
    appName: 'Nintendo Switch Online',
    category: 'games',
    pricing: 4,
    nextPayment: new Date('2024-08-08'),
    status: 'inactive',
    cycle: 'monthly',
    payment: 'credit card'
  }
];
