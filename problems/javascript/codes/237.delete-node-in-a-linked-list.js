/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function buildLinkedList(arr) {
  const root = new Node(arr[0]);
  let currentNode = root;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    const newNode = new Node(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  return root;
}

var deleteNode = function (node) {
  const root = buildLinkedList(node);
  let currentNode = root;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

console.time("delete-node-linked-list");
console.log(deleteNode([4, 5, 1, 9]));
console.timeEnd("delete-node-linked-list");
