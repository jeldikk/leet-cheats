class Queue {
  _queue = [];

  constructor() {}

  get length() {
    return this._queue.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(element) {
    this._queue.push(element);
  }

  dequeue() {
    if (this._queue.length === 0) {
      throw new Error("Empty Queue");
    }
    const ele = this._queue.shift();
    return ele;
  }

  clear() {
    this._queue = [];
  }
}

module.exports = Queue;
