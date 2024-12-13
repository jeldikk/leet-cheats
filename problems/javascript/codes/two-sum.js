/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let store = {};
  for (let i = 0; i < nums.length; i++) {
    let residue = target - nums[i];
    if (store[residue] === undefined || store[residue] === null) {
      store[nums[i]] = i;
    } else {
      return [store[residue], i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
