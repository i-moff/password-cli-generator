const _ = require('lodash');
const PasswordOptionsValidator = require('./PasswordOptionsValidator');

const PASSWORD_DATA_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  specials: '(.,/-&?$#@!*<>)'
};

/**
 * PasswordGenerator class
 * This class is used for generating secure passwords.
 */
class PasswordGenerator {
  /**
   * Generate password
   * @param options
   * @returns {string}
   * @throws Exception
   */
  static generate(options = {}) {
    PasswordOptionsValidator.validate(options);

    let password = '';
    for (let i = 0; i < options.length; i++) {
      password += PasswordGenerator.getRandomChar(PASSWORD_DATA_SETS.lowercase);
    }

    if (options.uppercase > 0) {
      password = password.substring(0, (password.length - options.uppercase));

      for (let i = 0; i < options.uppercase; i++) {
        password = PasswordGenerator.getRandomChar(PASSWORD_DATA_SETS.uppercase) + password;
      }
    }

    if (options.digits > 0) {
      password = password.substring(0, (password.length - options.digits));

      for (let i = 0; i < options.digits; i++) {
        password = PasswordGenerator.getRandomChar(PASSWORD_DATA_SETS.numbers) + password;
      }
    }

    if (options.special > 0) {
      password = password.substring(0, (password.length - options.special));
      for (let i = 0; i < options.special; i++) {
        password += PasswordGenerator.getRandomChar(PASSWORD_DATA_SETS.specials);
      }
    }

    return _.shuffle(password).join('');
  }

  /**
   * @param {String} chars
   * @returns {string}
   */
  static getRandomChar(chars) {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }
}

module.exports = PasswordGenerator;
