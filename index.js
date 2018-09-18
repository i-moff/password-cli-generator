const PasswordGenerator = require('./modules/password-generator/PasswordGenerator');
const program = require('commander');

const PASSWORD_DEFAULT_OPTIONS = {
  length: 14,
  uppercase: 1,
  digits: 1,
  special: 1
};

program
  .option('-l, --length <n>', 'Password length', parseInt)
  .option('-u, --uppercase <n>', 'Uppercase letters count', parseInt)
  .option('-d, --digits <n>', 'Digits count', parseInt)
  .option('-s, --special <n>', 'Special characters count', parseInt)
  .parse(process.argv);


const options = {
  length: program.length || PASSWORD_DEFAULT_OPTIONS.length,
  uppercase: program.uppercase || PASSWORD_DEFAULT_OPTIONS.uppercase,
  digits: program.digits || PASSWORD_DEFAULT_OPTIONS.digits,
  special: program.special || PASSWORD_DEFAULT_OPTIONS.special
};

try {
  const password = PasswordGenerator.generate(options);
  console.log(`Password has been successfully generated: ${password}`);
} catch (e) {
  console.error(`ERROR: ${e.message}`);
}


