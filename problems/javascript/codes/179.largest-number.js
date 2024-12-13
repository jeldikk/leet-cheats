/**
 * @param {number[]} nums
 * @return {string}
 */

/**
 * 
 * @Input: nums = [3,30,34,5,9]
    Output: "9534330"
 
 */
var largestNumber = function (nums) {
  let numStrings = nums.map((num) => num.toString());
  let sorted = numStrings.sort((a, b) => {
    return a + b > b + a ? -1 : 1;
  });
  return sorted.join("");
};

let nums = [3, 30, 34, 5, 9];
console.time("largestNumber");
console.log(largestNumber(nums));
console.timeEnd("largestNumber");
