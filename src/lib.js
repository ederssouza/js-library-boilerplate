'use strict'

export function sum (num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return new Error('All parameters should be a number')
  }

  return num1 + num2
}

function isNumber (arg) {
  return Object.prototype.toString.call(arg) === '[object Number]' &&
    !isNaN(arg) && arg !== Infinity
}
