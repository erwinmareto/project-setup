import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: 'Invalid email'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  })
});
