// Dependencies
import bcrypt from 'bcrypt';
import { Course } from '../../../models/Course/v1.js';
import { InvalidCredentials, ParamsRequirements } from '../../../middlewares/errors.js';
import { meetRequirements } from '../../../middlewares/passwordCheck.js';

// Route
export async function courseChangePasswordV1 (req, res, next) {
  const { classcode, oldPassword, newPassword } = req.body;

  // First check if the new password meets the requirements and are diferent than old one
  if (!meetRequirements(newPassword)) return next(new ParamsRequirements('new password does not meet the requirements'));
  if (oldPassword === newPassword) return next(new ParamsRequirements('new password must be different from old password'));

  // Find course and check if the old password is correct
  const course = await Course.findOne({ classcode });

  const credentialsCorrect = course === null
    ? false
    : await bcrypt.compare(oldPassword, course.password);

  if (!credentialsCorrect) return next(new InvalidCredentials("classcode credentials are invalid or course doesn't exist"));

  // Change the password
  course.password = await bcrypt.hash(newPassword, parseInt(process.env.BCRYPT_SALTROUND));
  course.save();

  return res.status(204).end();
}
