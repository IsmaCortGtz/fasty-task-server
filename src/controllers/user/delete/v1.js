// Dependencies
import { User } from '../../../models/User/v1.js';

// Route
export default async function userDeleteV1 (req, res) {
  const deleted = await User.findByIdAndDelete(req._id);

  if (deleted) {
    return res.status(204).end();
  }

  res.status(500).send({ error: 'Unknow error deleting user data' });
}
