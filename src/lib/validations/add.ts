import { z } from 'zod';

import { Cycles, SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

export const step1Schema = z.object({
  icon: z.string({ required_error: 'Icon is required' }).min(2, { message: 'Icon is required' }),
  appName: z
    .string({ required_error: 'App Name is required' })
    .min(2, { message: 'App Name is required' })
    .max(20, { message: 'App Name must be less than 20 characters' }),
  category: z.custom<SubscriptionCategory>().refine((val) => val !== undefined, {
    message: 'Category is required'
  })
});

export const step2Schema = z
  .object({
    cycle: z.custom<Cycles>().refine((val) => val !== undefined, {
      message: 'Cycle is required'
    }),
    paymentStart: z.date({ required_error: 'Payment Start is required' }),
    paymentEnd: z.date({ required_error: 'Payment End is required' }),
    price: z.preprocess(
      (val) => Number(val),
      z
        .number({ required_error: 'Price is required', invalid_type_error: 'Price must be a number' })
        .min(1, { message: 'Price must be greater than 0' })
    ),
    paymentMethod: z
      .string({ required_error: 'Payment Method is required' })
      .min(1, { message: 'Payment Method is required' })
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
  time: z.preprocess(
    (val) => Number(val),
    z
      .number({ required_error: 'Time is required', invalid_type_error: 'Time is required' })
      .min(1, { message: 'Interval must be greater than 0' })
  ),
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid Email' })
});
