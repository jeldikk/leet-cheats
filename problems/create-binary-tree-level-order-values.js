// Given a level order traversed array of values,
// create a binary tree with parent and child nodes

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
// returns the root node of the tree
function buildBinaryTree(arr) {
  const nodes = arr.map((v) => new Node(v));
  nodes.forEach((n, i) => {
    if (n.data !== null) {
      if (nodes[2 * i + 1] && nodes[2 * i + 1].data !== null) {
        n.left = nodes[2 * i + 1];
      }
      if (nodes[2 * i + 2] && nodes[2 * i + 2].data !== null) {
        n.right = nodes[2 * i + 2];
      }
    }
  });
  console.log({ nodes });
  return nodes[0];
}

function inOrderTraversal(root) {
  if (root === null) {
    return [];
  }

  let left = inOrderTraversal(root.left);
  let right = inOrderTraversal(root.right);
  return [...left, root.data, ...right];
}

// let nums = Array.from(Array(15).keys()).map((v) => v + 1);
let nums = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

let root = buildBinaryTree(nums);
console.log(inOrderTraversal(root));
