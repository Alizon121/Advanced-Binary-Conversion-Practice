/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(string) {
// //  We can start by converting base 2 to base 10
let base = '0x'
let binaryString = string.slice(2)
let base10 = parseInt(binaryString, 2)
let hexa = base10.toString(16)
return base+=hexa
}

/* Base 16 to base 2 */
function hexadecimalToBinary(string) {
  let base = '0b'
  let newStr = string.slice(2)
  let base10Num = parseInt(newStr, 16)

  // use toString() method to convert base-10 to base-2 or base-16
   let base10Str = base10Num.toString(2)
  return base+=base10Str
}

/* Base 10 to ASCII */
function decimalToAscii(num) {

// Return a string of UTF-16 from a decimal num
return String.fromCharCode(num)

}

/* Base 2 to ASCII */
function binaryToAscii(string) {
// Return a string of UTF-16 from a binary -> convert binary to dec

let binary = string.slice(2);
let base10 = parseInt(binary, 2);
return String.fromCharCode(base10)

}

/* Base 16 to ASCII */
function hexadecimalToAscii(string) {
// Convert the hexa into a decimal then use String method
let hexadecimal = string.slice(2)
let base10 = parseInt(hexadecimal, 16)

return String.fromCharCode(base10)
}

/* ASCII to base 10 */
function asciiToDecimal(string) {
// Convert the ASCII notation to a base-10 integer
let arr = string.split("")

let newArr = []
for (let i = 0; i < arr.length; i++) {
  newArr.push(string.charCodeAt(i));
}
return newArr

}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')

// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')

// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
