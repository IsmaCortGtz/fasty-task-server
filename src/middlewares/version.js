import { ApiVersionError } from './errors.js';

export default function versionHandler (version) {
  return function (req, res, next) {
    const requestVersion = parseInt(req.params.version.substring(1)); // removes the "v" and turns into a number

    if (typeof requestVersion !== 'number') return next(new ApiVersionError());
    if (version === requestVersion) return next();
    if (version === 1 && requestVersion !== 1) return next(new ApiVersionError());

    return next('route'); // skip to the next route
  };
}
