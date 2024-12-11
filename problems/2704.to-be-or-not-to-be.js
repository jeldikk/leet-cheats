/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(expect) {
      if (val === expect) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe(expect) {
      if (val !== expect) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  expect(5).toBe(5); // true
  expect(5).notToBe(5); // throws "Equal"
} catch (err) {
  console.log(err.message);
}
