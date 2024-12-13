/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }

    let result = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;

    // let reversedFuncs = functions.reverse();
    // const res = reversedFuncs.reduce((prev, curr) => {
    //   return curr(prev);
    // }, x);
    // return res;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
