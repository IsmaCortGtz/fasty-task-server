export default function versionHandler (version) {
  return function (req, res, next) {
    const requestVersion = parseInt(req.params.version.substring(1)); // removes the "v" and turns into a number

    const ApiVersionError = { name: 'ApiVersionError', message: 'api version error' };
    ApiVersionError.prototype = new Error();

    if (typeof requestVersion !== 'number') return next(ApiVersionError);
    if (version === requestVersion) return next();
    if (version === 1 && requestVersion !== 1) return next(ApiVersionError);

    return next('route'); // skip to the next route
  };
}
