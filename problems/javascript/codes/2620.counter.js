/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = null;
  return function () {
    if (!count) {
      count = n;
    } else {
      count++;
    }
    return count;
  };
};

var createCounter2 = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
