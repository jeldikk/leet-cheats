/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.time("linear-search");
console.log(search(nums, target));
console.timeEnd("linear-search");
