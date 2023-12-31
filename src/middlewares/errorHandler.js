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

  defaultError: (res, error) => {
    console.error(error.name, error);
    res.status(500).send(error || { error: 'Unexpected error' });
  }
};

export function errorHandler (error, req, res, next) {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;
  handler(res, error);
}

export function handler404 (req, res, next) {
  const Error404 = new Error('url not found');
  Error404.name = 'UrlNotFound';
  next(Error404);
}
