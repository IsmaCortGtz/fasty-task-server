// Controllers imports
/* Info */
import { subjectNewV1 } from './new/v1.js';
import { subjectDeleteV1 } from './delete/v1.js';

// Declare routes
const subject = {
  new: { v1: subjectNewV1 },
  delete: { v1: subjectDeleteV1 }
};

// Export routes
export default subject;
