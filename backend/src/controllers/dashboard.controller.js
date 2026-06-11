import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getDashboardStats = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const activeUsers = await User.countDocuments({ isActive: true });
  
  // Calculate total credits in circulation
  const creditAgg = await User.aggregate([
    {
      $group: {
        _id: null,
        totalCredits: { $sum: '$credits' },
      }
    }
  ]);
  const totalCredits = creditAgg[0]?.totalCredits || 0;

  // Plan distribution counts
  const planAgg = await User.aggregate([
    {
      $group: {
        _id: '$subscriptionPlan',
        count: { $sum: 1 }
      }
    }
  ]);

  const planDistribution = {
    free: 0,
    pro: 0,
    team: 0
  };
  
  planAgg.forEach(p => {
    if (planDistribution[p._id] !== undefined) {
      planDistribution[p._id] = p.count;
    }
  });

  // Recent registrations in the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recentRegistrations = await User.countDocuments({
    createdAt: { $gte: sevenDaysAgo }
  });

  const stats = {
    totalUsers,
    activeUsers,
    totalCredits,
    planDistribution,
    recentRegistrations,
  };

  return res.status(200).json(
    new ApiResponse(200, stats, 'Dashboard analytics fetched successfully')
  );
});
