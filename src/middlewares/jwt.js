// Dependencies
import jwt from 'jsonwebtoken';
import { User } from '../models/User/v1.js';

// Middleware
export function checkJWT (request, response, next) {
  const authorization = request.get('Authorization');
  let tokenString = '';

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    tokenString = authorization.substring(7);
  }

  const decodedToken = jwt.verify(tokenString, process.env.JWT_SECRET);

  if (!tokenString || !decodedToken._id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  User.findById(decodedToken._id)
    .then(user => {
      if (!user) return response.status(401).json({ error: 'token missing or invalid' });
      if (decodedToken.username !== user.username) return response.status(401).json({ error: 'token missing or invalid' });

      const { _id, username } = decodedToken;
      request._id = _id;
      request.username = username;
      next();
    })
    .catch(error => next(error));
}
