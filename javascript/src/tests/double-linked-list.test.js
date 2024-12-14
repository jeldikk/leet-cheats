const DoubleLinkedList = require("../double-linked-list");

describe("DoubleLinkedList Test Suite", () => {
    let dllist;
    describe("when DLL is empty", () => {

        beforeEach(() => {
            dllist = new DoubleLinkedList();
        })

        afterEach(() => {
            dllist = null;
        })

        test('should have zero size list', () => {

        });

        test("should throw error when trying to get an element with index", () => {
            
        })

    })
})