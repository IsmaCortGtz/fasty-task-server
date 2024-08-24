function errorMaker (name, defaultMessage = '', defaultCode = 500) {

  return (class ErrorMaker extends Error {
    constructor (message = defaultMessage, code = defaultCode) {
      super(message);
      this.name = name;
      this.code = code;
    }
  });
}

export const UrlNotFound = errorMaker('UrlNotFound', 'Url not found', 404);
export const ApiVersionError = errorMaker('ApiVersionError', 'API version error', 400);
export const UnknowError = errorMaker('UnknowError', 'Unexpected error has been ocurred', 500);

// Account
export const InvalidCredentials = errorMaker('InvalidCredentials', 'Invalid credentials', 401);
export const UsernameInUse = errorMaker('UsernameInUse', 'Username already in use', 409);
export const CourseInUse = errorMaker('CourseInUse', 'Classcode already in use', 409);
export const AccessDenied = errorMaker('AccessDenied', 'Access denied', 403);

// JWT
export const JsonWebTokenError = errorMaker('JsonWebTokenError', 'Token missing or invalid', 401);

// Params
export const ParamsNeeded = errorMaker('ParamsNeeded', 'Params needed', 400);
export const ParamsRequirements = errorMaker('ParamsRequirements', 'Params does not meet the requirements', 400);
