// Dependencies
import { User } from '../../../models/User/v1.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Route
export default async function userLoginV1 (req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.password);

  if (!passwordCorrect) {
    return res.status(401).send({ error: 'Invalid username or password' });
  }

  const token = jwt.sign({
    _id: user._id,
    username: user.username
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  res.send({
    username,
    token
  });
}
