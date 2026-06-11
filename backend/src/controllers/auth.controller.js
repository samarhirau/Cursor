import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';

export const syncUser = asyncHandler(async (req, res) => {
  const clerkId = req.clerkId; // Attached by authMiddleware
  const { firstName, lastName, email, imageUrl } = req.body;

  if (!email) {
    throw new ApiError(400, 'Email address is required for profile sync');
  }

  // Create or update user
  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      $set: {
        firstName,
        lastName,
        email,
        imageUrl,
      }
    },
    { upsert: true, new: true, runValidators: true }
  );

  return res.status(200).json(
    new ApiResponse(200, user, 'User profile synchronized successfully')
  );
});

export const getMe = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new ApiError(404, 'Current user profile not found in database');
  }
  
  return res.status(200).json(
    new ApiResponse(200, req.user, 'User profile retrieved successfully')
  );
});
