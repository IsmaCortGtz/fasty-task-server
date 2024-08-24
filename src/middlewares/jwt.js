// Dependencies
import jwt from 'jsonwebtoken';
import { JsonWebTokenError } from './errors.js';
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
    return next(new JsonWebTokenError());
  }

  User.findById(decodedToken._id)
    .then(user => {
      if (!user) return next(new JsonWebTokenError());
      if (decodedToken.username !== user.username) return next(new JsonWebTokenError());

      const { _id, username } = decodedToken;
      request._id = _id;
      request.username = username;
      return next();
    })
    .catch(error => next(error));
}
