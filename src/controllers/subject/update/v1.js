// Dependencies
import { User } from '../../../models/User/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { emailValidator, objectIdValidator } from '../../../middlewares/validator.js';

function updateData (document, key, value, checkType) {
  if (value !== undefined && checkType()) {
    document[key] = value;
  }
}

// Route
export async function subjectUpdateV1 (req, res, next) {
  // Validate params
  const { subjectId, teacher, subjectName, teacherEmail, links = [] } = req.body;
  if (!subjectId) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (!objectIdValidator(subjectId)) return next(new ParamsNeeded('subjectId invalid, check your access to the course.'));
  if (typeof subjectId !== 'string') return next(new ParamsNeeded('course invalid'));

  // Check if the subject exists
  const subjectDoc = await Subject.findById(subjectId);
  if (!subjectDoc) return next(new AccessDenied('course invalid, check your access'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(subjectDoc.course)) return next(new AccessDenied('course invalid, check your access'));

  // Update data
  updateData(subjectDoc, 'teacher', teacher, () => typeof teacher === 'string');
  updateData(subjectDoc, 'subjectName', subjectName, () => typeof subjectName === 'string');
  updateData(subjectDoc, 'subjectName', subjectName, () => (typeof subjectName === 'string' && emailValidator(teacherEmail)));
  updateData(subjectDoc, 'links', links, () => Array.isArray(links));

  await subjectDoc.save();

  // Send response
  return res.sendStatus(204);
}
