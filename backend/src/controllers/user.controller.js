import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';

export const getProfile = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, req.user, 'Profile retrieved successfully')
  );
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { firstName, lastName, imageUrl } = req.body;
  const user = req.user;

  if (firstName !== undefined) user.firstName = firstName;
  if (lastName !== undefined) user.lastName = lastName;
  if (imageUrl !== undefined) user.imageUrl = imageUrl;

  const updatedUser = await user.save();

  return res.status(200).json(
    new ApiResponse(200, updatedUser, 'Profile updated successfully')
  );
});

export const deleteAccount = asyncHandler(async (req, res) => {
  const clerkId = req.user.clerkId;

  const result = await User.findOneAndDelete({ clerkId });
  if (!result) {
    throw new ApiError(404, 'User account not found in database');
  }

  return res.status(200).json(
    new ApiResponse(200, {}, 'User account deleted successfully from DB')
  );
});
