/**
 * @param {number} n
 * @return {number}
 */

const memo = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 3,
};
var fib = function (n) {
  if (n in memo) {
    return memo[n];
  }
  const answer = fib(n - 1) + fib(n - 2);
  memo[n] = answer;
  return answer;
};

console.log(fib(3));
