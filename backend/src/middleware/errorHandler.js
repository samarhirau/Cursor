import { ZodError } from 'zod';
import { ApiError } from '../utils/apiError.js';
import { env } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
  let error = err;

  // Centralized logging in console
  if (env.NODE_ENV === 'development') {
    console.error('💥 Error Caught in Middleware:');
    console.error(err);
  }

  // Handle Zod Validation Errors
  if (error instanceof ZodError) {
    const message = error.errors.map((x) => `${x.path.join('.')}: ${x.message}`).join(', ');
    error = new ApiError(400, message);
  }

  // Handle Mongoose CastError (e.g. invalid ObjectId)
  if (error.name === 'CastError') {
    error = new ApiError(400, `Invalid value for path: ${error.path}`);
  }

  // Handle Mongoose Duplicate Key Error (code 11000)
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue || {})[0] || 'field';
    error = new ApiError(409, `Duplicate entry for field: ${field}`);
  }

  // Ensure it's an instance of ApiError
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, false, err.stack);
  }

  const response = {
    success: false,
    message: error.message,
  };

  // Optionally add stack trace in development
  if (env.NODE_ENV === 'development' && !error.isOperational) {
    response.stack = error.stack;
  }

  res.status(error.statusCode).json(response);
};

export default errorHandler;
