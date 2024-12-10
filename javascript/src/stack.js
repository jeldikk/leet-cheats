class Stack {
  _stack = [];
  _size;

  constructor(size = 0) {
    this._size = size;
  }

  get maxSize() {
    return this._size;
  }

  get size() {
    return this._stack.length;
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  push(ele) {
    if (!this.maxSize) {
      //unlimited stack case
      this._stack.push(ele);
    } else {
      // limited stack case
      if (this.size === this.maxSize) {
        throw new Error("Stack is Full");
      } else {
        this._stack.push(ele);
      }
    }
  }

  pop() {
    if (this._stack.length === 0) {
      throw new Error("Empty stack");
    }
    const ele = this._stack.pop();
    return ele;
  }

  top() {
    // this doesn't remove element from stack, but just return the element value at top
    if (this._stack.length === 0) {
      throw new Error("Empty stack");
    }
    const ele = this._stack.at(this.size - 1);
    return ele;
  }

  isFull() {
    if (this.maxSize === 0) {
      console.log("This is unlimited stack");
      return;
    }
    return this.size === this.maxSize;
  }

  clear() {
    this._stack = [];
  }
}

module.exports = Stack;
