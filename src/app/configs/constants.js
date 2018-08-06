export const VALIDATION_ERROR = `Request didn't pass validation`;
export const PERMISSION_DENIED = 'Permission Denied';
export const SOMETHING_WENT_WRONG = 'Something went wrong, please try again';
export const REQUIRED = resource => `${resource} is required`;
export const INVALID = resource => `${resource} is invalid`;
export const ALREADY_EXISTS = resource => `${resource} already exists!`;
export const NOT_EXISTS = resource => `${resource} doesn't exist!`;



export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_MAX_LENGTH = 64;

export const LENGTH_REQUIRED = (resource, options) => {
    const { min, max } = options;
    if (min && max) {
        return `${resource} must be at least ${min} and maximum ${max} characters!`;
    } else if (min) {
        return `${resource} must be at least ${min} characters!`;
    } else {
        return `${resource} must be maximum ${max} characters!`;
    }
};
export const SETTINGS_TITLE_MIN_LENGTH = 1;
export const SETTINGS_TITLE_MAX_LENGTH = 1;
