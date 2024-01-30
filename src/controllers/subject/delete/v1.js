// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { ParamsNeeded, AccessDenied, UnknowError } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function subjectDeleteV1 (req, res, next) {
  // Validate ObjectId format
  if (!req.params.subjectId) return next(new ParamsNeeded('subjectId invalid, check your access to the course.Subject missing or invalid'));
  if (!objectIdValidator(req.params.subjectId)) return next(new ParamsNeeded('subjectId invalid, check your access to the course.Subject missing or invalid'));

  // Check if subject exists
  const subject = await Subject.findById(req.params.subjectId);
  if (!subject) return next(new ParamsNeeded('subjectId invalid, check your access to the course.Subject missing or invalid'));

  // Check if user is admin in this course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(subject.course)) return next(new AccessDenied('you are not an admin in this course'));

  // Revome subject ID from course document
  const course = await Course.findById(subject.course);
  if (course) {
    if (course.subjects.includes(subject._id)) {
      const subjectIndex = course.subjects.indexOf(subject._id);
      course.subjects.splice(subjectIndex, 1);
      await course.save();
    }
  }

  // Delete subject
  const deleted = await Subject.findByIdAndDelete(subject._id);
  if (!deleted) return next(new UnknowError('subject not deleted, try again'));

  // Send status code
  return res.sendStatus(204);
}
