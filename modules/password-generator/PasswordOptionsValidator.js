const MIN_PASSWORD_LENGTH = 8;

/**
 * PasswordOptionsValidator
 * Is used for validation password options (f.e. min length)
 */
class PasswordOptionsValidator {

  /**
   * @param options
   * @throws Exception
   */
  static validate(options) {
    if (options.length < (options.uppercase + options.digits + options.special)) {
      throw new Error('Password length cannot be less than uppercase + digits + special');
    }

    if (options.length < MIN_PASSWORD_LENGTH) {
      throw new Error('Password length cannot be less than uppercase + digits + special');
    }
  }
}

module.exports = PasswordOptionsValidator;
