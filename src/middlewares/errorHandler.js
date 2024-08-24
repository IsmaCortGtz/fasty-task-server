import { UrlNotFound } from './errors.js';

// Default error handler
function defaultError(error) {
  console.error(error.name, error);
  return { code: 500, message: 'Unexpected error has been ocurred', name: 'Unexpectederror' };
}

// Handler for errors
export function errorHandler (error, req, res, next) {
  const handler = error.name && error.code && error.message ? error : defaultError(error);
  return res.status(handler.code).json({ message: handler.message, name: handler.name });
}

// 404 handler
export function handler404 (req, res, next) {
  return next(new UrlNotFound('url not found'));
}
