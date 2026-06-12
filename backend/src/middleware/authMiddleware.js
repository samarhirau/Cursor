import { createClerkClient } from '@clerk/backend';
import { env } from '../config/env.js';
import { ApiError } from '../utils/apiError.js';
import { User } from '../models/user.model.js';

const clerkClient = createClerkClient({ 
  secretKey: env.CLERK_SECRET_KEY,
  publishableKey: env.CLERK_PUBLISHABLE_KEY
});

export const authMiddleware = async (req, res, next) => {
  try {
    // 1. Verify Request using Clerk authenticateRequest
    // Express requests do not contain fully qualified URLs, which Clerk's web-standard Request parser requires.
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const clerkRequest = new Request(fullUrl, {
      method: req.method,
      headers: new Headers(req.headers),
    });
    
    const requestState = await clerkClient.authenticateRequest(clerkRequest);
    
    if (!requestState.isSignedIn) {
      throw new ApiError(401, 'Unauthorized: Invalid authentication session');
    }

    // 2. Extract verified Clerk ID
    const clerkId = requestState.toAuth().userId;
    req.clerkId = clerkId;

    // 3. Find User in MongoDB
    const dbUser = await User.findOne({ clerkId });

    if (!dbUser) {
      // If endpoint is sync-user, let it pass to register in DB
      const cleanUrl = req.originalUrl.split('?')[0];
      if (cleanUrl === '/api/v1/auth/sync-user') {
        return next();
      }
      throw new ApiError(403, 'User profile not synchronized. Please call sync-user endpoint first.');
    }

    if (!dbUser.isActive) {
      throw new ApiError(403, 'Your account has been deactivated');
    }

    // 4. Attach Mongoose User Object to Request
    req.user = dbUser;
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
