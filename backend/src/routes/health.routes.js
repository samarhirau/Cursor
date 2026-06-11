import { Router } from 'express';
import { ApiResponse } from '../utils/apiResponse.js';

const router = Router();

router.get('/health', (req, res) => {
  const data = {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  };

  res.status(200).json(
    new ApiResponse(200, data, 'API server health status verified')
  );
});

export default router;
