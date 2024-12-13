/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueSet = new Set(nums);
  uniqueSet.forEach((v, idx) => (nums[idx] = v));
  return uniqueSet.size;
};

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums = [1, 1, 2];

console.time("remove-duplicates");
console.log(removeDuplicates(nums));
console.log({ nums });
console.timeEnd("remove-duplicates");
