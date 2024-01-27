import { UrlNotFound } from './errors.js';

// Declaretion of errors actions
const ERROR_HANDLERS = {
  UnknowError: { code: 500, message: 'Unexpected error has been ocurred' },
  SyntaxError: { code: 401, message: 'Invalid request' },
  JsonWebTokenError: { code: 401, message: 'token missing or invalid' },
  TokenExpiredError: { code: 401, message: 'token expired' },
  ApiVersionError: { code: 400, message: 'api version error' },
  UrlNotFound: { code: 404, message: 'url not found' },
  PasswordNeeded: { code: 404, message: 'password needed' },
  PasswordRequirements: { code: 404, message: "password doesn't meet the requirements" },
  UsernameRequirements: { code: 404, message: "username doesn't meet the requirements" },
  InvalidCredentials: { code: 401, message: 'invalid credentials' },
  UsernameInUse: { code: 409, message: 'username already in use' },

  defaultError: (error) => {
    console.error(error.name, error);
    return { code: 500, message: 'Unexpected error has been ocurred', name: 'Unexpectederror' };
  }
};

// Handler
export function errorHandler (error, req, res, next) {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError(error);
  return res.status(handler.code).json({ message: error.message || handler.message, name: error.name });
}

// 404 handler
export function handler404 (req, res, next) {
  return next(new UrlNotFound('url not found'));
}
