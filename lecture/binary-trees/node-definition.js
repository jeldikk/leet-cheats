class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  hasChildren() {
    return !!this.left || !!this.right;
  }
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
