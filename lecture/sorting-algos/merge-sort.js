function mergeSort(arr) {
  // first divide the arry into two halves
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid)); // slice will have [arr[0], arr[mid])
  let right = mergeSort(arr.slice(mid)); // slice will have [arr[mid], arr[arr.length])

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

let arr = [9, 8, 3, 5, 4, 7, 6, 1, 2];
console.time("merge-sort");
console.log(mergeSort(arr));
console.timeEnd("merge-sort");
