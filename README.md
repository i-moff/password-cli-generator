# Password cli generator

### Generation of secure passwords with some predefined properties:
* Password must contain only English letters, digits and special characters.
* Minimal password length is 8 characters. No upper limit.
* At least 1 digit.
* At least 1 upper-case character
* At least 1 special character (.,/-&?$#@!*<>)

### The application must support the following command-line parameters:
* -lN --length=N: password length. Minimal length is 8 characters, default
length is 14 characters. Cannot be less than uppercase + digits + special
* -uN --uppercase=N: minimal number of uppercase characters. Default is 1.
Cannot be greater than length – digits - special
* -dN --digits=N: minimal number of digits Default is 1. Cannot be greater than
length – uppercase - special
* -sN --special=N: minimal number of special characters. Default is 1. Cannot be
greater than length – uppercase - digits

### Usage
`node index.js -l 14 -u 2 -d 4 -s 5`
`node index.js --length=11 --uppercase=2 --digits=4 --special=5`
