/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = 0;
  if (nums.length === 1) {
    return true;
  }
  while (i <= nums.length) {
    i = i + nums[i];
    if (i === nums.length - 1) {
      return true;
    }
    if (nums[i] === 0) {
      break;
    }
    console.log({ i });
  }
  return false;
};

// let nums = [2, 3, 1, 1, 4];
let nums = [3, 2, 1, 0, 4];
console.time("jump-game");
console.log(canJump(nums));
