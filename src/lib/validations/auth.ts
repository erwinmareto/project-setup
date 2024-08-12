import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: 'Invalid email'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  })
});

export const registerSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.'
    }),
    email: z.string().min(2, {
      message: 'Invalid email'
    }),
    password: z.string().min(6, {
      message: 'Password must be at least 4 characters.'
    }),
    confirmPassword: z.string().min(6, {
      message: 'Password must be at least 4 characters.'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export const forgotPasswordSchema = z.object({
  email: z.string().min(2, {
    message: 'Invalid email'
  })
});
