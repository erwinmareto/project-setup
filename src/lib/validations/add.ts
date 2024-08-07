import { z } from 'zod';

export const step1Schema = z.object({
  icon: z.string().min(2).max(50),
  appName: z.string().min(2).max(50),
  category: z.string().min(2).max(50)
});
