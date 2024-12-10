/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  let carry = 0;
  while (true) {
    if (i < 0) {
      digits.unshift(0);
      i = 0;
    }
    let num = digits[i];
    if (num === 9) {
      carry = 1;
      digits[i] = 0;
    } else {
      carry = 0;
      digits[i] = digits[i] + 1;
    }
    if (carry === 0) {
      break;
    }
    i--;
  }
  return digits;
};

// let digits = [1, 2, 3];
// let digits = [4, 3, 2, 1];
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// let digits = [9];
console.time("plus-one");
console.log(plusOne(digits));
console.timeEnd("plus-one");
