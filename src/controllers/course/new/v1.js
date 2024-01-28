// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { CourseInUse, UnknowError } from '../../../middlewares/errors.js';

// Route
export async function courseNewV1 (req, res, next) {
  const { classcode, password } = req.body;

  // Ceck if course already exists
  const courseExists = await Course.findOne({ classcode });
  if (courseExists) return next(new CourseInUse());

  // Cerate the new course
  const newCourse = new Course({ classcode, password });
  newCourse.save();
  if (!newCourse) return next(new UnknowError('unknow error has been ocurred creating course'));

  // Add the course to the user as admin
  const user = await User.findById(req._id);
  user.adminCourses.push(newCourse._id);
  user.save();

  return res.status(201).end();
}
