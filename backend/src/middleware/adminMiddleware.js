import { ApiError } from '../utils/apiError.js';

export const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return next(new ApiError(401, 'Unauthorized: User session not found'));
  }

  const allowedRoles = ['admin', 'super_admin'];
  if (!allowedRoles.includes(req.user.role)) {
    return next(new ApiError(403, 'Forbidden: Admin permissions required'));
  }

  next();
};

export default adminMiddleware;
