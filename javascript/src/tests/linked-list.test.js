const LinkedList = require("../linked-list")

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
        expect(llist.size).toBe(0)
    });
    test("should able to add elements(numbers)", () => {
        llist.add(2);
        llist.add(22);
        llist.add(222);
        llist.add(2222);
        expect(llist.getList()).toEqual([2, 22, 222, 2222]);
        expect(llist.size).toBe(4)
    });

    test("should able to delete item at provided index", () => {
        llist.add(2);
        llist.add(22);
        llist.add(222);
        llist.add(2222);
        llist.add(22222);
        llist.delete(2); // delete 3rd item from start;
        expect(llist.getList()).toEqual([2, 22, 2222, 22222]);
    });

    test("should able to insert an item at given index", () => {
        llist.add(2);
        llist.add(22);
        llist.add(222);
        llist.add(2222);
        llist.add(22222);
        llist.insert(33, 3);
        expect(llist.getList()).toEqual([
            2,
            22,
            222,
            33,
            2222,
            22222
        ])
    })


})