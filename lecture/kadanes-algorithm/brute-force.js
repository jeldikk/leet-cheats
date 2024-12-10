/**
 * Given an integer array nums, find the subarray( the values should be continuous ) with the largest sum, and return its value
 *
 * input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] ---> output: 6, [4, -1, 2, 1]
 */

// Now first lets try with brute force method

//
function bruteForceMethod(arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

function kadanesAlgorithm(arr) {
  let sum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.time("brute-force");
// console.log(bruteForceMethod(arr));
console.log(kadanesAlgorithm(arr));
console.timeEnd("brute-force");
