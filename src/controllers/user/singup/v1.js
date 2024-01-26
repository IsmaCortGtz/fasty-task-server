// Dependencies
import { User } from '../../../models/User/v1.js';
import { UsernameInUse } from '../../../middlewares/errors.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Route
export default async function userSingupV1 (req, res, next) {
  const { username, password: plainPassword } = req.body;
  const user = await User.findOne({ username });

  if (user) return next(new UsernameInUse('Username already exists'));

  const newUser = new User({
    username,
    password: await bcrypt.hash(plainPassword, parseInt(process.env.BCRYPT_SALTROUND))
  });

  newUser.save();

  const token = jwt.sign({
    _id: newUser._id,
    username: newUser.username
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  return res.send({
    username: newUser.username,
    token
  });
}
