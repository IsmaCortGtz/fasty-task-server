// Controllers imports
/* Create */
import { courseNewV1 } from './new/v1.js';

// Declare routes
const course = {
  new: { v1: courseNewV1 }
};

// Export routes
export default course;
