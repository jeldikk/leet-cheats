class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  isLeafNode() {
    return this.left === null && this.right === null;
  }
}

function buildTree() {
  const root = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);

  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;

  return root;
}

function preOrderTraversal(node) {
  if (node === null) {
    return [];
  }
  const leftTraversal = preOrderTraversal(node.left);
  const rightTraversal = preOrderTraversal(node.right);
  return [node.data, ...leftTraversal, ...rightTraversal];
}

function inOrderTraversal(node) {
  if (node === null) {
    return [];
  }
  const leftTraversal = inOrderTraversal(node.left);
  const rightTraversal = inOrderTraversal(node.right);
  return [...leftTraversal, node.data, ...rightTraversal];
}

function postOrderTraversal(node) {
  if (node === null) {
    return [];
  }
  const leftTraversal = postOrderTraversal(node.left);
  const rightTraversal = postOrderTraversal(node.right);
  return [...leftTraversal, ...rightTraversal, node.data];
}

console.log({ preOrder: preOrderTraversal(buildTree()) });
console.log({ inOrder: inOrderTraversal(buildTree()) });
console.log({ postOrder: postOrderTraversal(buildTree()) });
