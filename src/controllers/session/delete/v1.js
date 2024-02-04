// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Session } from '../../../models/Session/v1.js';
import { ParamsNeeded, AccessDenied, UnknowError } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function sessionDeleteV1 (req, res, next) {
  // Validate ObjectId format
  if (!req.params.sessionId) return next(new ParamsNeeded('sessionId invalid, check your access to the course.'));
  if (!objectIdValidator(req.params.sessionId)) return next(new ParamsNeeded('subjectId invalid, check your access to the course.'));

  // Check if session exists
  const session = await Session.findById(req.params.sessionId);
  if (!session) return next(new ParamsNeeded('sessionId invalid, check your access to the course.'));

  // Check if user is admin in this course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(session.course)) return next(new AccessDenied('you are not an admin in this course'));

  // Revome session ID from course document
  const course = await Course.findById(session.course);
  if (course) {
    if (course.sessions.includes(session._id)) {
      const sessionIndex = course.sessions.indexOf(session._id);
      course.sessions.splice(sessionIndex, 1);
      await course.save();
    }
  }

  // Delete session
  const deleted = await Session.findByIdAndDelete(session._id);
  if (!deleted) return next(new UnknowError('session not deleted, try again'));

  // Send status code
  return res.sendStatus(204);
}
