class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(idx) {
    if (idx >= this.length) return false;
    if (idx < 0) idx += this.length;
    let node;
    if (idx <= this.length/2) {
      node = this.head
      for (let i = 0; i < idx; i++) {
        node = node.next
      }
    } else {
      node = this.tail
      for (let i = this.length - 1; i > idx; i--) {
        node = node.prev
      }
    }
    return node
  }

  emptyList() {
    let oldHead = this.head;
    this.head = null;
    this.tail = null;
    this.length = null;
    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)
    if (this.head) {
      newNode.next = this.head
      this.head.prev = newNode
    } else {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }

  shift() {
    if (this.head === null) return;
    if (this.length === 1) return this.emptyList();
    let oldHead = this.head
    this.head = oldHead.next
    this.head.prev = null
    this.length--
    oldHead.next = null
    return oldHead
  }

  pop() {
    if (this.head === null) return;
    if (this.length === 1) return this.emptyList();
    let oldTail = this.tail
    this.tail = oldTail.prev
    this.tail.next = null
    this.length--
    oldTail.prev = null
    return oldTail
  }

  push(val) {
    let newNode = new Node(val)
    if (this.head) {
      this.tail.next = newNode
      newNode.prev = this.tail
    } else {
      this.head = newNode
    }
    this.tail = newNode;
    this.length++;
    return this
  }
}

let list = new DoublyLinkedList

list.unshift(1)
list.unshift(0);
list.push(2)
list.push(3)
list.push(4)
//
console.log(list.get(-2))
