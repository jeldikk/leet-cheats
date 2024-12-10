/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let modulo = k % nums.length;
  let kElements = nums.splice(nums.length - modulo);
  nums.unshift(...kElements);
  console.log({ nums });
};

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.time("rotate");
console.log(rotate(nums, k));
console.timeEnd("rotate");
