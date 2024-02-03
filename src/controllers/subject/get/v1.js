// Dependencies
import { User } from '../../../models/User/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function subjectGetV1 (req, res, next) {
  // Validate params
  if (!req.params.subjectId) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (!objectIdValidator(req.params.subjectId)) return next(new ParamsNeeded('subjectId invalid, check your access to the course.'));
  if (typeof req.params.subjectId !== 'string') return next(new ParamsNeeded('course invalid'));

  // Check if the subject exists
  const subjectDoc = await Subject.findById(req.params.subjectId);
  if (!subjectDoc) return next(new AccessDenied('course invalid, check your access'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.courses.includes(subjectDoc.course) && !user.adminCourses.includes(subjectDoc.course)) return next(new AccessDenied('course invalid, check your access'));
  const { __v, ...result } = subjectDoc.toObject();

  // Send response
  return res.json(result);
}
