import { z } from 'zod';

export const step1Schema = z.object({
  icon: z.string().min(2).max(50),
  appName: z.string().min(2).max(50),
  category: z.string().min(2).max(50)
});

export const step2Schema = z
  .object({
    cycle: z.string().min(2).max(50),
    paymentStart: z.date(),
    paymentEnd: z.date(),
    price: z.string().min(2).max(50),
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
