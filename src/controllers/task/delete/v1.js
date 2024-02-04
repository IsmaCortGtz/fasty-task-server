// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Task } from '../../../models/Task/v1.js';
import { ParamsNeeded, AccessDenied, UnknowError } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function taskDeleteV1 (req, res, next) {
  // Validate ObjectId format
  if (!req.params.taskId) return next(new ParamsNeeded('taskId invalid, check your access to the course. Task missing or invalid'));
  if (!objectIdValidator(req.params.taskId)) return next(new ParamsNeeded('subjectId invalid, check your access to the course. Task missing or invalid'));

  // Check if task exists
  const task = await Task.findById(req.params.taskId);
  if (!task) return next(new ParamsNeeded('taskId invalid, check your access to the course. Task missing or invalid'));

  // Check if user is admin in this course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(task.course)) return next(new AccessDenied('you are not an admin in this course'));

  // Revome task ID from course document
  const course = await Course.findById(task.course);
  if (course) {
    if (course.tasks.includes(task._id)) {
      const taskIndex = course.tasks.indexOf(task._id);
      course.tasks.splice(taskIndex, 1);
      await course.save();
    }
  }

  // Delete task
  const deleted = await Task.findByIdAndDelete(task._id);
  if (!deleted) return next(new UnknowError('task not deleted, try again'));

  // Send status code
  return res.sendStatus(204);
}
