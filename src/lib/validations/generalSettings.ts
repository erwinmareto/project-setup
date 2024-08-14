import { z } from 'zod';

export const generalSettingsSchema = z.object({
  currency: z.string().min(2).max(50),
  language: z.string().min(2).max(50)
});
