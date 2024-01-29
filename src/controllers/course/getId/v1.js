// Dependencies
import { User } from '../../../models/User/v1.js';
import { Course } from '../../../models/Course/v1.js';
import { ParamsNeeded, AccessDenied } from '../../../middlewares/errors.js';

// Route
export function courseGetIdV1 (atribute) {
  return async (req, res, next) => {
    // Check if course exists
    const course = await Course.findOne({ classcode: req.params.classcode });
    if (!course) return next(new ParamsNeeded('missing or invalid classcode'));

    // Check if user has access
    const user = await User.findById(req._id);
    if (!user.adminCourses.includes(course._id) && !user.courses.includes(course._id)) return next(new AccessDenied('you do not have access to this course'));

    // Get data of the course
    const data = atribute === 'tasks' ? course.tasks : (atribute === 'schedule' ? course.schedule : (atribute === 'subjects' ? course.subjects : undefined));
    if (data === undefined) return res.send(204).end();
    return res.json(data);
  };
}
