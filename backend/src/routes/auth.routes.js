import { Router } from 'express';
import { syncUser, getMe } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validationMiddleware.js';
import { syncUserSchema } from '../validators/auth.validator.js';

const router = Router();

// Routes protected by Clerk JWT token authentication
router.post('/sync-user', authMiddleware, validate(syncUserSchema), syncUser);
router.get('/me', authMiddleware, getMe);

export default router;
