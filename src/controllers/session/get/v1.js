// Dependencies
import { User } from '../../../models/User/v1.js';
import { Session } from '../../../models/Session/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function sessionGetV1 (req, res, next) {
  // Validate params
  if (!req.params.sessionId) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (typeof req.params.sessionId !== 'string') return next(new ParamsNeeded('sessionId invalid'));
  if (!objectIdValidator(req.params.sessionId)) return next(new ParamsNeeded('sessionId invalid, check your access to the course.'));

  // Check if the session exists
  const sessionDoc = await Session.findById(req.params.sessionId);
  if (!sessionDoc) return next(new AccessDenied('task invalid'));

  // Check if the user is registered in the course
  const user = await User.findById(req._id);
  if (!user.courses.includes(sessionDoc.course) && !user.adminCourses.includes(sessionDoc.course)) return next(new AccessDenied('course invalid, check your access'));
  const { __v, ...result } = sessionDoc.toObject();

  // Send response
  return res.json(result);
}
