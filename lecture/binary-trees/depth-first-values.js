class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// const depthFirstValues = (root) => {
//   const stack = [root];
//   const finalList = [];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.right !== null) {
//       stack.push(current.right);
//     }

//     if (current.left !== null) {
//       stack.push(current.left);
//     }

//     finalList.push(current.data);
//   }

//   return finalList;
// };

const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.data, ...leftValues, ...rightValues];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValues(a));
