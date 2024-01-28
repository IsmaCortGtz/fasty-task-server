function errorMaker (name) {
  return (class BusinessError extends Error {
    constructor (message) {
      super(message);
      this.name = name;
    }
  });
}

export const UrlNotFound = errorMaker('UrlNotFound');
export const ApiVersionError = errorMaker('ApiVersionError');
export const UnknowError = errorMaker('UnknowError');

// Account
export const PasswordNeeded = errorMaker('PasswordNeeded');
export const PasswordRequirements = errorMaker('PasswordRequirements');
export const UsernameRequirements = errorMaker('UsernameRequirements');
export const InvalidCredentials = errorMaker('InvalidCredentials');
export const UsernameInUse = errorMaker('UsernameInUse');
export const CourseInUse = errorMaker('CourseInUse');
export const AccessDenied = errorMaker('AccessDenied');

// JWT
export const JsonWebTokenError = errorMaker('JsonWebTokenError');

// Params
export const ParamsNeeded = errorMaker('ParamsNeeded');
export const ParamsRequirements = errorMaker('ParamsRequirements');
