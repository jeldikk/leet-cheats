function findNumber(array, idx) {
  for (let i = 0; i < array.length; i++) {
    if (i === idx) {
      return array[i];
    }
  }
}

function anotherMethod(array, idx) {
  return array[idx];
}

const numbers = [23, 22, 25, 432, 123, 345];
console.time("findNumber");
console.log(findNumber(numbers, 4));
console.timeLog("findNumber");
console.log(anotherMethod(numbers, 4));
console.timeLog("findNumber");
console.timeEnd("findNumber");
