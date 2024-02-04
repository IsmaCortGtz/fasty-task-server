// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Session } from '../../../models/Session/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

function updateData (document, key, value, checkType) {
  if (value !== undefined && checkType()) {
    document[key] = value;
  }
}

// Route
export async function sessionUpdateV1 (req, res, next) {
  // Validate params
  const { sessionId, subject, starts, ends, classroom, links = [] } = req.body;
  if (!sessionId) return next(new ParamsNeeded('params missing or invalid'));

  // Validate ObjectId format
  if (!objectIdValidator(sessionId)) return next(new ParamsNeeded('sessionId invalid, check your access to the course.'));
  if (subject !== undefined && !objectIdValidator(subject)) return next(new ParamsNeeded('subjectId invalid, check your access to the course.'));

  // Check if the task exists
  const sessionDoc = await Session.findById(sessionId);
  if (!sessionDoc) return next(new AccessDenied('taskId invalid, check your access'));

  // Check if the task's course exists
  const courseDoc = await Course.findById(sessionDoc.course);
  if (!courseDoc) return next(new AccessDenied('taskId invalid, check your access'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(sessionDoc.course)) return next(new AccessDenied('course invalid, check your access'));

  // Check if the new subject exists
  if (subject !== undefined) {
    const newSubject = await Subject.findById(subject);
    if (!newSubject) updateData(sessionDoc, 'subject', subject, () => objectIdValidator(subject));
  }

  // Update data
  updateData(sessionDoc, 'starts', starts, () => starts instanceof Date);
  updateData(sessionDoc, 'ends', ends, () => ends instanceof Date);
  updateData(sessionDoc, 'classroom', classroom, () => (typeof classroom === 'string'));
  updateData(sessionDoc, 'links', links, () => Array.isArray(links));

  await sessionDoc.save();

  // Send response
  return res.sendStatus(204);
}
