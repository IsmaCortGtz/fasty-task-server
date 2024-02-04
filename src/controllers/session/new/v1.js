// Dependencies
import mongoose from 'mongoose';
import { User } from '../../../models/User/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Session } from '../../../models/Session/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';
import { objectIdValidator } from '../../../middlewares/validator.js';

// Route
export async function sessionNewV1 (req, res, next) {
  // Validate params
  const { subject, course, starts, ends, classroom, links = [] } = req.body;
  if (!subject || !course || !starts || !ends || !classroom) {
    return next(new ParamsNeeded('params missing or invalid'));
  }

  // Validate ObjectId format
  if (!objectIdValidator(subject)) return next(new ParamsNeeded('subject invalid'));
  if (!objectIdValidator(course)) return next(new ParamsNeeded('course invalid'));

  // Validate data types
  if (typeof subject !== 'string') return next(new ParamsNeeded('subject invalid'));
  if (typeof course !== 'string') return next(new ParamsNeeded('course invalid'));
  if (starts instanceof Date) return next(new ParamsNeeded('starts invalid'));
  if (ends instanceof Date) return next(new ParamsNeeded('ends invalid'));
  if (typeof classroom !== 'string') return next(new ParamsNeeded('classroom invalid'));
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

  // Save the new session
  const newSession = new Session({
    subject: new mongoose.Types.ObjectId(subject),
    course: new mongoose.Types.ObjectId(course),
    starts,
    ends,
    classroom,
    links
  });
  await newSession.save();

  courseDoc.sessions.push(newSession._id);
  await courseDoc.save();

  // Send response
  return res.status(201).send(newSession._id);
}
