function printBoth(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.time("printBoth");
console.log(printBoth(100));
console.timeEnd("printBoth");
