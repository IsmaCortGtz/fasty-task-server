// Controllers imports
/* Create */
import { courseNewV1 } from './new/v1.js';
import { courseChangePasswordV1 } from './changePassword/v1.js';
import { courseDeleteV1 } from './delete/v1.js';
import { courseGetIdV1 } from './getId/v1.js';

// Declare routes
const course = {
  new: { v1: courseNewV1 },
  delete: { v1: courseDeleteV1 },
  passwordChange: { v1: courseChangePasswordV1 },
  getId: { v1: courseGetIdV1 }
};

// Export routes
export default course;
