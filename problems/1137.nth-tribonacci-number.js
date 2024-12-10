/**
 * @param {number} n
 * @return {number}
 */
const memo = {
  0: 0,
  1: 1,
  2: 1,
};
var tribonacci = function (n) {
  if (n in memo) {
    return memo[n];
  }
  const answer = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  memo[n] = answer;
  console.log({ memo });
  return answer;
};

console.time("tribonacci");
console.log(tribonacci(34));
console.timeEnd("tribonacci");
