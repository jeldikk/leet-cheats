class Queue {
  _queue = [];
  _size;

  constructor(size = 0) {
    this._size = size;
  }

  get size() {
    return this._queue.length;
  }

  get maxSize() {
    return this._size;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(element) {
    if (!this.maxSize) {
      this._queue.push(element);
    } else {
      if (this.size === this.maxSize) {
        throw new Error("Queue is Full");
      } else {
        this._queue.push(element);
      }
    }
  }

  dequeue() {
    if (this._queue.length === 0) {
      throw new Error("Empty Queue");
    }
    const ele = this._queue.shift();
    return ele;
  }

  isFull() {}

  clear() {
    this._queue = [];
  }
}

module.exports = Queue;
