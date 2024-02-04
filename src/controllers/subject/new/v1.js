// Dependencies
import mongoose from 'mongoose';
import { User } from '../../../models/User/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { emailValidator, objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function subjectNewV1 (req, res, next) {
  // Validate params
  const { course, teacher, subjectName, teacherEmail, links = [] } = req.body;
  if (!course || !teacher || !subjectName || !teacherEmail) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (!objectIdValidator(course)) return next(new ParamsNeeded('course invalid'));

  // Validate data types
  if (typeof course !== 'string') return next(new ParamsNeeded('course invalid'));
  if (typeof teacher !== 'string') return next(new ParamsNeeded('teacher invalid'));
  if (typeof subjectName !== 'string') return next(new ParamsNeeded('subjectName invalid'));
  if (typeof teacherEmail !== 'string') return next(new ParamsNeeded('teacherEmail invalid'));
  if (!Array.isArray(links)) return next(new ParamsNeeded('links invalid'));

  // validate email
  if (!emailValidator(teacherEmail)) return next(new ParamsNeeded('teacherEmail invalid'));

  // Check if the user is admin of the course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(course)) return next(new AccessDenied('course invalid, check your access'));

  // Check if the course exists
  const courseDoc = await Course.findById(course);
  if (!courseDoc) return next(new AccessDenied('course invalid, check your access'));

  // Save the new subject
  const newSubject = new Subject({
    course: new mongoose.Types.ObjectId(course),
    teacher,
    subjectName,
    teacherEmail,
    links
  });
  await newSubject.save();

  courseDoc.subjects.push(newSubject._id);
  await courseDoc.save();

  // Send response
  return res.status(201).send(newSubject._id);
}
