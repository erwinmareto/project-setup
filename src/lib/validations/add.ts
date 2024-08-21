import { z } from 'zod';

import { Cycles, SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

export const step1Schema = z.object({
  icon: z.string().min(2).max(50),
  appName: z.string().min(2).max(50),
  category: z.custom<SubscriptionCategory>()
});

export const step2Schema = z
  .object({
    cycle: z.custom<Cycles>(),
    paymentStart: z.date(),
    paymentEnd: z.date(),
    price: z.preprocess((val) => Number(val), z.number().min(1, 'Number must be greater than 0')),
    paymentMethod: z.string().min(2).max(50)
  })
  .refine((data) => data.paymentStart < data.paymentEnd, {
    message: 'Payment Start must be before Payment End',
    path: ['paymentStart']
  })
  .refine((data) => data.paymentEnd > data.paymentStart, {
    message: 'Payment End must be after Payment Start',
    path: ['paymentEnd']
  });

export const step3Schema = z.object({
  time: z.string(),
  email: z.string().min(2).max(50)
});
