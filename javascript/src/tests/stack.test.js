const Stack = require("../stack");

describe("Stack Test Suite", () => {
  let stack;

  describe("Empty Stack Test Suite", () => {
    beforeEach(() => {
      stack = new Stack();
    });

    afterEach(() => {
      stack = null;
    });

    test("should create empty stack if no size value provided", () => {
      expect(stack.size).toBe(0);
    });

    test("should throw error when trying to pop on empty stack", () => {
      const throwsError = () => stack.pop();
      expect(throwsError).toThrow();
      expect(throwsError).toThrow("Empty stack");
    });

    test("should throw error when trying to top on empty stack", () => {
      const throwsError = () => stack.top();
      expect(throwsError).toThrow();
      expect(throwsError).toThrow("Empty stack");
    });

    test("should return undefined when isFull on empty stack", () => {
      const actual = stack.isFull();
      expect(actual).not.toBeDefined();
    });

    test("should be empty and size to be zero", () => {
      expect(stack.isEmpty()).toBeTruthy();
      expect(stack.size).toBe(0);
    });
  });

  describe("Non Empty Stack with unlimited size Test suite", () => {
    beforeEach(() => {
      stack = new Stack();
    });

    afterEach(() => {
      stack = null;
    });
    test("should have valid size and isEmpty values on multiple push", () => {
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      expect(stack.size).toBe(4);
      expect(stack.isEmpty()).toBeFalsy();
    });

    test("should return last pushed value on top()", () => {
      stack.push(2);
      stack.push(22);
      stack.push(222);
      expect(stack.top()).toBe(222);
    });

    test("should have valid top(), size on proper pushes and pops", () => {
      stack.push(1);
      stack.push(11);
      stack.push(111);
      stack.push(1111);
      let poppedEle = stack.pop();
      expect(poppedEle).toBe(1111);
      stack.pop();
      stack.pop();
      expect(stack.top()).toBe(1);
      expect(stack.size).toBe(1);
    });

    test("should clear stack array and reset the stack", () => {
      stack.push(1);
      stack.push(11);
      stack.push(111);
      expect(stack.size).toBe(3);
      stack.clear();
      expect(stack.size).toBe(0);
      expect(stack.isEmpty()).toBeTruthy();
    });
  });

  describe("Non Empty Stack with limited size Test Suite", () => {
    let MAX_STACK_SIZE = 5;
    beforeEach(() => {
      stack = new Stack(MAX_STACK_SIZE);
    });
    afterEach(() => {
      stack = null;
    });
    test("should have valid maxSize, size, isEmpty(), isFull()", () => {
      expect(stack.maxSize).toBe(5);
      expect(stack.size).toBe(0);
      expect(stack.isEmpty()).toBeTruthy();
      expect(stack.isFull()).toBeFalsy();
    });

    test("should throw error when trying to push element on filled stack", () => {
      // make 5 pushes to fill the stack
      stack.push(1);
      stack.push(11);
      stack.push(111);
      stack.push(1111);
      stack.push(11111);
      expect(stack.size).toEqual(stack.maxSize);
      expect(stack.isFull()).toBeTruthy();
      expect(() => stack.push(111111)).toThrow();
    });
  });
});
