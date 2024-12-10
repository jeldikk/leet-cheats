/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = nums.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
  return nums.map((value) => product / value);
};

let nums = [1, 2, 3, 4];
console.time("product-except-self");
console.log(productExceptSelf(nums));
console.timeEnd("product-except-self");
