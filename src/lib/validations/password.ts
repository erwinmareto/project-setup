import { z } from 'zod';

export const passwordSchema = z.object({
  oldPassword: z.string().min(2).max(50),
  newPassword: z.string().min(2).max(50)
});
