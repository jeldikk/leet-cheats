const Queue = require("../queue");

describe.only("Queue Test Suite", () => {
  let queue = null;
  describe("Empty Queue Test suite", () => {
    beforeEach(() => {
      queue = new Queue();
    });

    afterEach(() => {
      queue = null;
    });

    test("should have zero for size, maxSize, isEmpty(), isFull() values", () => {
      expect(queue.size).toBe(0);
      expect(queue.maxSize).toBe(0);
      expect(queue.isEmpty()).toBeTruthy();
      expect(queue.isFull()).not.toBeDefined();
    });

    test("should throw error on front(), rear(), dequeue()", () => {
      expect(() => queue.rear()).toThrow("Empty Queue");
      expect(() => queue.front()).toThrow("Empty Queue");
      expect(() => queue.dequeue()).toThrow("Empty Queue");
    });
  });

  describe("Unlimited Non-Empty Queue Test Suite", () => {
    beforeEach(() => {
      queue = new Queue();
    });

    afterEach(() => {
      queue = null;
    });

    test("should have valid size, front(), rear()", () => {
      queue.enqueue(1);
      queue.enqueue(11);
      queue.enqueue(111);
      expect(queue.size).toBe(3);
      expect(queue.rear()).toBe(111);
      expect(queue.front()).toBe(1);
    });

    test("should throw error when front(), rear(), dequeue() if no elements are present", () => {
      queue.enqueue(1);
      queue.enqueue(11);
      queue.enqueue(111);
      expect(queue.size).toBe(3);
      let ele = queue.dequeue();
      expect(ele).toBe(1);
      expect(queue.dequeue()).toBe(11);
      expect(queue.dequeue()).toBe(111);
      expect(() => queue.dequeue()).toThrow("Empty Queue");
      expect(() => queue.front()).toThrow("Empty Queue");
      expect(() => queue.rear()).toThrow("Empty Queue");
    });
  });

  describe("Limited Non-Empty Queue Test Suite", () => {
    beforeEach(() => {
      queue = new Queue(5);
    });
    afterEach(() => {
      queue = null;
    });
    test("should have valid maxSize, size for unlimited queue", () => {
      expect(queue.maxSize).toBe(5);
      expect(queue.size).toBe(0);
    });
    test("should throw error when enqueuing after queue is full", () => {
      queue.enqueue(1);
      queue.enqueue(11);
      queue.enqueue(111);
      queue.enqueue(1111);
      queue.enqueue(11111);
      expect(queue.isFull()).toBe(true);
      expect(() => queue.enqueue(2)).toThrow("Queue is Full");
    });
  });

  describe("should reset queue after clear()", () => {
    beforeEach(() => {
      queue = new Queue(3);
      queue.enqueue(1);
      queue.enqueue(11);
      queue.enqueue(111);
    });

    afterEach(() => {
      queue = null;
    });

    test("should clear all items after clear()", () => {
      expect(queue.isFull()).toBe(true);
      expect(queue.maxSize).toBe(3);
      expect(queue.size).toBe(3);
      queue.clear();
      expect(queue.isEmpty()).toBe(true);
      expect(queue.size).toBe(0);
    });
  });
});
