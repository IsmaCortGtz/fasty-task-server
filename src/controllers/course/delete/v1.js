// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { Task } from '../../../models/Task/v1.js';
import { Subject } from '../../../models/Subject/v1.js';
import { Session } from '../../../models/Session/v1.js';
import { Schedule } from '../../../models/Schedule/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';

// Delete all documents from ID
async function deleteNestedDocuments (mongooseModel, id) {
  if (id === undefined) return 0;
  if (!Array.isArray(id)) {
    const deleted = await mongooseModel.findByIdAndDelete(id);
    if (deleted) return 1;
    return 0;
  }

  let allDeleted = 0;
  id.forEach(async (currentID) => {
    const deleted = await mongooseModel.findByIdAndDelete(currentID);
    if (deleted) allDeleted += 1;
  });

  return allDeleted;
}

// Route
export async function courseDeleteV1 (req, res, next) {
  // Check if course exists
  const course = await Course.findOne({ classcode: req.params.classcode });
  if (!course) return next(new ParamsNeeded('missing or invalid classcode'));

  // Check if user is admin in this course
  const user = await User.findById(req._id);
  if (!user.adminCourses.includes(course._id)) return next(new AccessDenied('you are not an admin in this course'));

  const subDocumentsDeleted = {
    fromUser: 0,
    course: 0,
    tasks: 0,
    subjects: 0,
    sessions: 0,
    schedule: 0
  };

  // Delete all tasks
  subDocumentsDeleted.tasks = await deleteNestedDocuments(Task, course.tasks);
  subDocumentsDeleted.subjects = await deleteNestedDocuments(Subject, course.subjects);
  subDocumentsDeleted.sessions = await deleteNestedDocuments(Session, course.sessions);
  subDocumentsDeleted.schedule = await deleteNestedDocuments(Schedule, course.schedule);

  // Revome ID from user account
  const userIndex = user.adminCourses.indexOf(course._id);
  user.adminCourses.splice(userIndex, 1);
  subDocumentsDeleted.fromUser = 1;
  await user.save();

  // Delete course
  const deleted = await Course.findByIdAndDelete(course._id);
  if (deleted) subDocumentsDeleted.course = 1;

  return res.json(subDocumentsDeleted);
}
