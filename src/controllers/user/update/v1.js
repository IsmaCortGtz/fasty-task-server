// Dependencies
import { User } from '../../../models/User/v1.js';
import { meetRequirements } from '../../../middlewares/passwordCheck.js';
import { JsonWebTokenError, UnknowError } from '../../../middlewares/errors.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function userUpdateV1 (req, res, next) {
  const { username, config, newPassword, oldPassword } = req.body;
  const user = await User.findById(req._id);
  if (!user) return next(new JsonWebTokenError());
  const status = {};

  // Change username
  if (username && user.username !== username) {
    user.username = username;
    status.username = true;
  }

  // Change password
  if (newPassword && oldPassword) {
    if (await bcrypt.compare(oldPassword, user.password)) {
      if (meetRequirements(newPassword)) {
        user.password = await bcrypt.hash(newPassword, parseInt(process.env.BCRYPT_SALTROUND));
        status.password = true;
      } else {
        status.password = false;
      }
    } else {
      status.password = false;
    }
  }

  // Change password
  if (config === null) {
    user.config = {};
    user.markModified('config');
    status.config = true;
  }

  // Change config
  if (typeof config === 'object') {
    status.config = {};
    Object.keys(config).forEach(key => {
      if (config[key] === null && user.config[key]) {
        delete user.config[key]; // Delete when is null
        status.config[key] = true;
        user.markModified('config');
        return;
      }

      if (typeof config[key] === 'object') {
        user.config[key] = config[key]; // Update config
        status.config[key] = true;
        user.markModified('config');
      }
    });
  }

  const isSaved = await user.save();
  if (user !== isSaved) return next(new UnknowError('Unknow error saving data'));

  if (status.username) {
    const token = jwt.sign({
      _id: user._id,
      username: user.username
    }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });
    return res.send({ token, status });
  }

  return res.send({ status });
}
