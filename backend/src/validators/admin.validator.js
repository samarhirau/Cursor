import { z } from 'zod';

export const getUsersQuerySchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    role: z.enum(['user', 'admin', 'super_admin']).optional(),
    subscriptionPlan: z.enum(['free', 'pro', 'team']).optional(),
  })
});

export const adminUpdateUserSchema = z.object({
  params: z.object({
    id: z.string().min(1, "User ID is required"),
  }),
  body: z.object({
    role: z.enum(['user', 'admin', 'super_admin']).optional(),
    subscriptionPlan: z.enum(['free', 'pro', 'team']).optional(),
    credits: z.number().nonnegative("Credits cannot be negative").optional(),
    isActive: z.boolean().optional(),
  })
});

export const userIdParamSchema = z.object({
  params: z.object({
    id: z.string().min(1, "User ID is required"),
  })
});
