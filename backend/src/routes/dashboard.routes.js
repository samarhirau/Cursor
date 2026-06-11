import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboard.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

// Dashboard analytics stats route protected by user authentication
router.get('/stats', authMiddleware, getDashboardStats);

export default router;
