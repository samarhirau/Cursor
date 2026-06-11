export const getPaginationOptions = (query) => {
  const page = Math.max(1, parseInt(query.page, 10) || 1);
  const limit = Math.max(1, Math.min(100, parseInt(query.limit, 10) || 10));
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const getPaginatedResponse = (docs, totalDocs, page, limit) => {
  const totalPages = Math.ceil(totalDocs / limit);
  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    results: docs,
    pagination: {
      totalDocs,
      limit,
      totalPages,
      page,
      hasPrevPage,
      hasNextPage,
    }
  };
};
