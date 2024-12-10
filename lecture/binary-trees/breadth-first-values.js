class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstValues(root) {
  const queue = [root]; // unshift -> add from behind; pop -> remove from front
  const visitedValues = [];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.left !== null) {
      queue.unshift(current.left);
    }

    if (current.right !== null) {
      queue.unshift(current.right);
    }
    visitedValues.push(current.data);
  }

  return visitedValues;
}

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

console.log(breadthFirstValues(a));
