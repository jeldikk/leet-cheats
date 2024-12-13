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
        throw new Error("head is a readonly property")
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
    }

    delete(idx){
        // delete an item at index idx (start from 0)
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