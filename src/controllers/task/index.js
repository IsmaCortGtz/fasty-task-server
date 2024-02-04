// Controllers imports
/* Info */
import { taskNewV1 } from './new/v1.js';

// Declare routes
const task = {
  new: { v1: taskNewV1 }
};

// Export routes
export default task;
