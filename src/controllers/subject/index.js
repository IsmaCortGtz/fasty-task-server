// Controllers imports
/* Info */
import { subjectNewV1 } from './new/v1.js';
import { subjectDeleteV1 } from './delete/v1.js';
import { subjectUpdateV1 } from './update/v1.js';
import { subjectGetV1 } from './get/v1.js';

// Declare routes
const subject = {
  new: { v1: subjectNewV1 },
  update: { v1: subjectUpdateV1 },
  delete: { v1: subjectDeleteV1 },
  get: { v1: subjectGetV1 }
};

// Export routes
export default subject;
