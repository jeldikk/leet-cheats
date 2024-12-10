/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;
  if (startIdx === endIdx) {
    return nums[0] === target ? 0 : -1;
  }
  while (startIdx < endIdx) {
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    if (nums[middleIdx] === target) {
      return middleIdx;
    } else if (nums[middleIdx] < target) {
      startIdx = middleIdx + 1;
    } else if (nums[middleIdx] > target) {
      endIdx = middleIdx - 1;
    }
  }
  return -1;
};

let nums = [5]; //[-1, 0, 3, 5, 9, 12];
let target = 5; //2;
console.time("Binary Search");
console.log(search(nums, target));
console.timeEnd("Binary Search");
