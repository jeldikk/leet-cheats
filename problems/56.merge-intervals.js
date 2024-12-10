/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  console.log({ intervals });
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.time("merge-intervals");
console.log(merge(intervals));
console.timeEnd("merge-intervals");
