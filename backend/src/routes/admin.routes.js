import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/admin.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';
import { validate } from '../middleware/validationMiddleware.js';
import { 
  getUsersQuerySchema, 
  adminUpdateUserSchema, 
  userIdParamSchema 
} from '../validators/admin.validator.js';

const router = Router();

// Secure all admin routes with authentication and role access checking
router.use(authMiddleware, adminMiddleware);

router.get('/users', validate(getUsersQuerySchema), getAllUsers);
router.get('/user/:id', validate(userIdParamSchema), getUserById);
router.patch('/user/:id', validate(adminUpdateUserSchema), updateUser);
router.delete('/user/:id', validate(userIdParamSchema), deleteUser);

export default router;
