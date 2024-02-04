// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Task } from '../../../models/Task/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

function updateData (document, key, value, checkType) {
  if (value !== undefined && checkType()) {
    document[key] = value;
  }
}

// Route
export async function taskUpdateV1 (req, res, next) {
  // Validate params
  const { taskId, deadline, openDate, taskName, taskDescription, links = [] } = req.body;
  if (!taskId) return next(new ParamsNeeded('params missing or invalid'));

  // Validate ObjectId format
  if (typeof taskId !== 'string') return next(new ParamsNeeded('taskId invalid'));
  if (!objectIdValidator(taskId)) return next(new ParamsNeeded('taskId invalid, check your access to the course.'));

  // Check if the task exists
  const taskDoc = await Task.findById(taskId);
  if (!taskDoc) return next(new AccessDenied('taskId invalid, check your access'));

  // Check if the task's course exists
  const courseDoc = await Course.findById(taskDoc.course);
  if (!courseDoc) return next(new AccessDenied('taskId invalid, check your access'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(taskDoc.course)) return next(new AccessDenied('course invalid, check your access'));

  // Update data
  updateData(taskDoc, 'deadline', deadline, () => deadline instanceof Date);
  updateData(taskDoc, 'openDate', openDate, () => openDate instanceof Date);
  updateData(taskDoc, 'taskName', taskName, () => (typeof taskName === 'string'));
  updateData(taskDoc, 'taskDescription', taskDescription, () => (typeof taskDescription === 'string'));
  updateData(taskDoc, 'links', links, () => Array.isArray(links));

  await taskDoc.save();

  // Send response
  return res.sendStatus(204);
}
