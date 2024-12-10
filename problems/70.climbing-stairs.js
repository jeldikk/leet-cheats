/**
 * @param {number} n
 * @return {number}
 */

const memo = {
  1: 1,
  2: 2,
  3: 3,
};
var climbStairs = function (num) {
  console.log({ memo });
  if (memo[num]) {
    return memo[num];
  }
  const oneStepCount = climbStairs(num - 1);
  const twoStepCount = climbStairs(num - 2);

  const answer = oneStepCount + twoStepCount;
  memo[num] = answer;

  return memo[num];
};

console.log(climbStairs(3));
console.log(climbStairs(100));
