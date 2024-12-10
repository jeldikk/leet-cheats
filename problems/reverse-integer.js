/**
 * @param {number} x
 * @return {number}
 */

const BOUND = 2 ** 31;
const MAXVALUE = BOUND - 1;
const MINVALUE = -1 * BOUND;
var reverse = function (x) {
  let baseNumberArr;
  let isNegative = x < 0 ? true : false;
  if (isNegative) {
    baseNumberArr = x.toString().substring(1).split("");
  } else {
    baseNumberArr = x.toString().split("");
  }
  if (baseNumberArr.length > BOUND.toString().length) {
    return 0;
  }
  let reversed = parseInt(baseNumberArr.reverse().join(""));
  let result = isNegative ? -1 * reversed : reversed;
  if (result < MINVALUE || result > MAXVALUE) {
    return 0;
  }
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
