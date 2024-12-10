function quickSort(nums) {
  const pivotIdx = 0;

  if (nums.length <= 1) {
    return nums;
  }

  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[pivotIdx]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), nums[pivotIdx], ...quickSort(right)];
}

let nums = [8, 3, 5, 4, 7, 6, 1, 2];
console.time("quick-sort");
console.log(quickSort(nums));
console.timeEnd("quick-sort");
