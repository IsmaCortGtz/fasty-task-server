// Dependencies
import { User } from '../../../models/User/v1.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Route
export default async function userSingupV1 (req, res) {
  const { username, password: plainPassword } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    return res.status(409).send({ error: 'Username already exists' });
  }

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

  res.send({
    username: newUser.username,
    token
  });
}
