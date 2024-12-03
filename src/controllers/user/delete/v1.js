// Dependencies
import bcrypt from 'bcrypt';
import { User } from '../../../models/User/v1.js';
import { UnknowError, AccessDenied } from '../../../middlewares/errors.js';

// Route
export default async function userDeleteV1 (req, res, next) {

  const { password } = req.body;
  const user = await User.findById(req._id);

  const permission = user === null
  ? false
  : await bcrypt.compare(password, user.password); 


  if (!permission) {
    return next(new AccessDenied('Access denied'));
  }

  const deleted = await User.findByIdAndDelete(req._id);

  if (deleted) {
    return res.status(204).end();
  }

  return next(new UnknowError('Unknow error deleting user data'));
}
