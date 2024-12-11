/**
 *  dequeue <-- <front>[here goes the elements of queue]<back> <-- enqueue
 */

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
    return this.size === 0;
  }

  /**
   * Insertion of element to the queue
   * @param {*} element
   */
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

  /**
   * Removes element from the queue
   * @returns
   */
  dequeue() {
    if (this.size === 0) {
      throw new Error("Empty Queue");
    }
    const ele = this._queue.shift();
    return ele;
  }

  /**
   * acquires the data element available at front without deleting it
   */
  front() {
    if (this.size === 0) {
      throw new Error("Empty Queue");
    } else {
      return this._queue[0];
    }
  }

  /**
   * returns element at rear end without removing it
   */
  rear() {
    if (this.size === 0) {
      throw new Error("Empty Queue");
    } else {
      return this._queue[this.size - 1];
    }
  }

  /**
   * Validates if the queue is full
   */
  isFull() {
    if (!this.maxSize) {
      console.log("Unlimited Queue");
      return;
    }
    return this.maxSize === this.size;
  }

  clear() {
    this._queue = [];
  }
}

module.exports = Queue;
