// Dependencies
import mongoose from 'mongoose';
import { User } from '../../../models/User/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Task } from '../../../models/Task/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function taskNewV1 (req, res, next) {
  // Validate params
  const { subject, course, deadline, openDate, taskName, taskDescription, links = [] } = req.body;
  if (!subject || !course || !deadline || !openDate || !taskName || !taskDescription) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (!objectIdValidator(subject)) return next(new ParamsNeeded('subject invalid'));
  if (!objectIdValidator(course)) return next(new ParamsNeeded('course invalid'));

  // Validate data types
  if (typeof subject !== 'string') return next(new ParamsNeeded('subject invalid'));
  if (typeof course !== 'string') return next(new ParamsNeeded('course invalid'));
  if (deadline instanceof Date) return next(new ParamsNeeded('deadline invalid'));
  if (openDate instanceof Date) return next(new ParamsNeeded('openDate invalid'));
  if (typeof taskName !== 'string') return next(new ParamsNeeded('taskName invalid'));
  if (typeof taskDescription !== 'string') return next(new ParamsNeeded('taskDescription invalid'));
  if (links !== undefined && !Array.isArray(links)) return next(new ParamsNeeded('links invalid'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(course)) return next(new AccessDenied('course invalid, check your access'));

  // Check if the course exists
  const courseDoc = await Course.findById(course);
  if (!courseDoc) return next(new AccessDenied('course invalid, check your access'));
  if (!courseDoc.subjects.includes(subject)) return next(new AccessDenied('this subject is not registered in the course'));

  // Check if the subject exists
  const subjectDoc = await Subject.findById(subject);
  if (!subjectDoc) return next(new AccessDenied('subject invalid, check if exists'));

  // Save the new subject
  const newTask = new Task({
    subject: new mongoose.Types.ObjectId(subject),
    course: new mongoose.Types.ObjectId(course),
    deadline,
    openDate,
    taskName,
    taskDescription,
    links
  });
  await newTask.save();

  courseDoc.tasks.push(newTask._id);
  await courseDoc.save();

  // Send response
  return res.status(201).send(newTask._id);
}
