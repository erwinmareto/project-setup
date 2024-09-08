import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, { message: 'Name is required' }).max(50),
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid Email' }),
  location: z.string({ required_error: 'Location is required' }).min(2),
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .min(10, { message: 'Invalid phone number' })
    .max(15, { message: 'Invalid phone number' })
});
