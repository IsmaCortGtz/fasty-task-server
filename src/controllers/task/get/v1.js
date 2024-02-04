// Dependencies
import { User } from '../../../models/User/v1.js';
import { Task } from '../../../models/Task/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function taskGetV1 (req, res, next) {
  // Validate params
  if (!req.params.taskId) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (typeof req.params.taskId !== 'string') return next(new ParamsNeeded('course invalid'));
  if (!objectIdValidator(req.params.taskId)) return next(new ParamsNeeded('taskId invalid, check your access to the course.'));

  // Check if the task exists
  const taskDoc = await Task.findById(req.params.taskId);
  if (!taskDoc) return next(new AccessDenied('task invalid'));

  // Check if the user is registered in the course
  const user = await User.findById(req._id);
  if (!user.courses.includes(taskDoc.course) && !user.adminCourses.includes(taskDoc.course)) return next(new AccessDenied('course invalid, check your access'));
  const { __v, ...result } = taskDoc.toObject();

  // Send response
  return res.json(result);
}
