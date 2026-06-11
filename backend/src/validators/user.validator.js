import { z } from 'zod';

export const updateProfileSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, "First name cannot be empty").trim().optional(),
    lastName: z.string().min(1, "Last name cannot be empty").trim().optional(),
    imageUrl: z.string().url("Invalid image url").trim().optional(),
  })
});
