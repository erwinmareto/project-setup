import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  phoneNumber: z.string().min(10).max(15)
});
