import { UrlNotFound } from './errors.js';

// Declaretion of errors actions
const ERROR_HANDLERS = {
  SyntaxError: (res) =>
    res.status(401).json({ error: 'Invalid request' }),

  JsonWebTokenError: (res) =>
    res.status(401).json({ error: 'token missing or invalid' }),

  TokenExpiredError: (res) =>
    res.status(401).json({ error: 'token expired' }),

  ApiVersionError: (res) =>
    res.status(400).json({ error: 'api version error' }),

  UrlNotFound: (res) =>
    res.status(404).json({ error: 'url not found' }),

  PasswordNeeded: (res) =>
    res.status(404).json({ error: 'password needed' }),

  PasswordRequirements: (res) =>
    res.status(404).json({ error: "password doesn't meet the requirements" }),

  defaultError: (res, error) => {
    console.error(error.name, error);
    res.status(500).send(error || { error: 'Unexpected error' });
  }
};
// Handler
export function errorHandler (error, req, res, next) {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;
  handler(res, error);
}

// 404 handler
export function handler404 (req, res, next) {
  return next(new UrlNotFound('url not found'));
}
