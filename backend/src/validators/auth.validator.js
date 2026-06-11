import { z } from 'zod';

export const syncUserSchema = z.object({
  body: z.object({
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    email: z.string().email("Invalid email format").trim().toLowerCase(),
    imageUrl: z.string().url("Invalid image url").optional().or(z.literal("")),
  })
});
