import mongoose from 'mongoose';
import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { getPaginationOptions, getPaginatedResponse } from '../utils/paginate.js';

export const getAllUsers = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPaginationOptions(req.query);
  const { role, subscriptionPlan } = req.query;

  const filter = {};
  if (role) filter.role = role;
  if (subscriptionPlan) filter.subscriptionPlan = subscriptionPlan;

  const totalDocs = await User.countDocuments(filter);
  const docs = await User.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const paginatedResult = getPaginatedResponse(docs, totalDocs, page, limit);

  return res.status(200).json(
    new ApiResponse(200, paginatedResult, 'Users list fetched successfully')
  );
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const query = id.startsWith('user_') ? { clerkId: id } : { _id: id };
  const user = await User.findOne(query);

  if (!user) {
    throw new ApiError(404, 'User not found in system');
  }

  return res.status(200).json(
    new ApiResponse(200, user, 'User details fetched successfully')
  );
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { role, subscriptionPlan, credits, isActive } = req.body;

  const query = id.startsWith('user_') ? { clerkId: id } : { _id: id };
  const user = await User.findOne(query);

  if (!user) {
    throw new ApiError(404, 'User not found in system');
  }

  if (role !== undefined) user.role = role;
  if (subscriptionPlan !== undefined) user.subscriptionPlan = subscriptionPlan;
  if (credits !== undefined) user.credits = credits;
  if (isActive !== undefined) user.isActive = isActive;

  const updatedUser = await user.save();

  return res.status(200).json(
    new ApiResponse(200, updatedUser, 'User updated successfully by administrator')
  );
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const query = id.startsWith('user_') ? { clerkId: id } : { _id: id };
  const deletedUser = await User.findOneAndDelete(query);

  if (!deletedUser) {
    throw new ApiError(404, 'User not found in system');
  }

  return res.status(200).json(
    new ApiResponse(200, {}, 'User deleted successfully by administrator')
  );
});
