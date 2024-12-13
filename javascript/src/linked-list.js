class Node{
    _data = null
    _next = null
    constructor(val){
        this._data = val
    }

    get value(){
        return this._data;
    }

    get next(){
        return this._next;
    }

    set next(ref){
        this._next = ref;
    }
}

class LinkedList{
    _root = null;
    _length = 0;
    constructor(){

    }

    get head(){
        return this._root;
    }

    get size(){
        return this._length
    }

    set head(_){
        throw new Error("Head is a readonly property")
    }

    at(idx){
        // should return value at specified index
        if(this.size === 0){
            throw new Error("Linked List is Empty");
        }
        else if(idx > this.size - 1){
            throw new Error("Index out of bounds")
        }

        let count = 0;
        let currentNode = this._root;
        if(idx === 0){
            return currentNode.value;
        }
        
        while(count !== idx){
            currentNode = currentNode.next;
            count++;
        }
        
    }

    add(data){
        const node = new Node(data)
        if(this._root === null){
            this._root = node;
        }
        else{
            let currentNode = this._root;
            while(true){
                if(currentNode.next === null){
                    // currentNode = currentNode.next;
                    currentNode.next = node;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
        this._length += 1;
    }

    insert(data, idx){
        // insert a node with data at index idx (start from 0)
        if(idx > this.size - 1){
            throw new Error("Insufficient List size")
        }

        let newNode = new Node(data);
        let count = 0;
        let currentNode = this._root;
        while(count < idx - 1){
            currentNode = currentNode.next;
            count++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    delete(idx){
        // delete an item at index idx (start from 0)
        if(this.size === 0){
            throw new Error("Linked List is Empty")
        }
        else if(idx > this.size - 1){
            throw new Error('Index out of bounds')
        }

        let deletingNode = null;
        let count = 0;
        let currentNode = this._root;
        while(count < idx - 1){
            currentNode = currentNode.next;
            count++;
        }
        deletingNode = currentNode.next;
        currentNode.next = deletingNode.next;
        return deletingNode.value;
    }

    getList(){
        let result = [];
        let currentNode = this._root;
        while(true){
            if(currentNode.next === null){
                result.push(currentNode.value);
                break;
            }
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

module.exports = LinkedList;