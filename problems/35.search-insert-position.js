/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;
  let midIdx;
  while (startIdx <= endIdx) {
    midIdx = Math.floor((startIdx + endIdx) / 2);
    if (nums[midIdx] === target) {
      return midIdx;
    }
    if (nums[midIdx] < target) {
      startIdx = midIdx + 1;
    } else if (nums[midIdx] > target) {
      endIdx = midIdx - 1;
    }
  }
  return midIdx;
};

let nums = [1, 3, 5, 6];
let target = 7;

console.time("search-insert");
console.log(searchInsert(nums, target));
console.timeEnd("search-insert");
