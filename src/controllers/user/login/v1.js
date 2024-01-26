// Dependencies
import { User } from '../../../models/User/v1.js';
import { InvalidCredentials } from '../../../middlewares/errors.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Route
export default async function userLoginV1 (req, res, next) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const credentialsCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.password);

  if (!credentialsCorrect) {
    return next(new InvalidCredentials('Invalid username or password'));
  }

  const token = jwt.sign({
    _id: user._id,
    username: user.username
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  return res.send({
    username,
    token
  });
}
