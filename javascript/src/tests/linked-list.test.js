const LinkedList = require("../linked-list");

describe("Linked List Test Suite", () => {
  let llist;

  beforeEach(() => {
    llist = new LinkedList();
  });

  afterEach(() => {
    llist = null;
  });

  test("should able to create a Linked List", () => {
    // const llist = new LinkedList();
    expect(llist).toBeDefined();
    expect(llist.head).toBeNull();
    expect(llist.size).toBe(0);
  });

  test("should throw error when trying to set head externally", () => {
    expect(() => {
      llist.head = "123";
    }).toThrow(/head is a readonly property/i);
  });
  test("should be able to add elements(numbers)", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    llist.add(2222);
    expect(llist.getList()).toEqual([2, 22, 222, 2222]);
    expect(llist.size).toBe(4);
  });

  test("should throw error when trying to get value from empty list", () => {
    expect(() => llist.at(0)).toThrow("Linked List is Empty");
  });

  test("should throw error when trying to get value from out-of-bound index", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    llist.add(2222);
    expect(() => llist.at(10)).toThrow(/index out of bounds/i);
  });

  test("should return value at specified index", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    llist.add(2222);
    expect(llist.at(2)).toBe(222);
    expect(llist.at(0)).toBe(2);
    expect(llist.at(3)).toBe(2222);
  });

  test("should throw error when trying to delete an item from empty linked list", () => {
    expect(() => llist.delete(2)).toThrow("Linked List is Empty");
  });

  test("should able to delete and return item at provided index", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    llist.add(2222);
    llist.add(22222);
    let res = llist.delete(2); // delete 3rd item from start;
    expect(llist.getList()).toEqual([2, 22, 2222, 22222]);
    expect(res).toBe(222);

    res = llist.delete(1); // delete 1st index item from current list
    expect(llist.getList()).toEqual([2, 2222, 22222]);
    expect(res).toBe(22);

    res = llist.delete(2); // delete 2nd index item from current list
    expect(llist.getList()).toEqual([2, 2222]);
    expect(res).toBe(22222);

    res = llist.delete(0);
    expect(llist.getList()).toEqual([2222]);
    expect(res).toBe(2);
  });

  test("should throw error when trying to delete item index more than present", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    expect(llist.size).toBe(3);
    expect(() => llist.delete(5)).toThrow(/Index out of bounds/i);
  });

  test("should throw error if insert is made on improper index", () => {
    llist.add(2);
    llist.add(22);

    expect(() => llist.insert(22222, 5)).toThrow(/insufficient list size/i);
  });
  test("should able to insert an item at given index", () => {
    llist.add(2);
    llist.add(22);
    llist.add(222);
    llist.add(2222);
    llist.add(22222);
    llist.insert(33, 3);
    expect(llist.getList()).toEqual([2, 22, 222, 33, 2222, 22222]);
    expect(llist.size).toEqual(6);

    llist.insert(4, 0);
    expect(llist.getList()).toEqual([4, 2, 22, 222, 33, 2222, 22222]);
    expect(llist.size).toEqual(7);

    llist.insert(77, 7);
    expect(llist.getList()).toEqual([4, 2, 22, 222, 33, 2222, 22222, 77]);
    expect(llist.size).toEqual(8);
  });
});
