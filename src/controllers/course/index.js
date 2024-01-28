// Controllers imports
/* Create */
import { courseNewV1 } from './new/v1.js';
import { courseChangePasswordV1 } from './changePassword/v1.js';

// Declare routes
const course = {
  new: { v1: courseNewV1 },
  passwordChange: { v1: courseChangePasswordV1 }
};

// Export routes
export default course;
