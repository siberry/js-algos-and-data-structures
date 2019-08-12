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

  remove(idx) {
    if (idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return !!this.pop();
    let removedNode = this.get(idx)
    let before = removedNode.prev
    let after = removedNode.next
    before.next = after, after.prev = before
    removedNode.next = null, removedNode.prev = null
    this.length--
    return removedNode
  }

  insert(idx, val) {
    let newNode = new Node(val)
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let node = this.get(idx)
    if (node) {
      let prev = node.prev
      prev.next = newNode, newNode.prev = prev
      newNode.next = node, node.prev = newNode
      this.length++
    }
    return !!node;
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

  set(idx, newVal) {
    if (idx >= this.length) return false;
    this.get(idx).val = newVal
    return true;
  }

  emptyList() {
    let oldHead = this.head;
    this.head = null;
    this.tail = null;
    this.length = 0;
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
list.insert(2, 1.5)
//
console.log(list.remove(2))
console.log(list)
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
