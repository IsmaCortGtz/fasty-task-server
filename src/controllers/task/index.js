// Controllers imports
/* Info */
import { taskNewV1 } from './new/v1.js';
import { taskUpdateV1 } from './update/v1.js';
import { taskDeleteV1 } from './delete/v1.js';
import { taskGetV1 } from './get/v1.js';

// Declare routes
const task = {
  new: { v1: taskNewV1 },
  update: { v1: taskUpdateV1 },
  delete: { v1: taskDeleteV1 },
  get: { v1: taskGetV1 }
};

// Export routes
export default task;
