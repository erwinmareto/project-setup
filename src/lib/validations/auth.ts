import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  }),
  userId: z.string().min(4, {
    message: 'UserID must be at least 4 characters.'
  })
});

export const postSchema = z.object({
  id: z.string().min(2, { message: 'ID must be a number.' }),
  postId: z.string({ message: 'Post ID must be a number.' })
});
