class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(val) {
    let newNode = new Node(val)
    if (this.length === 0) this.first = newNode;
    else this.last.next = newNode;
    this.last = newNode
    return ++this.length
  }

  dequeue() {
    if (this.length === 0) return;
    let firstNode = this.first
    if (this.length === 1) this.last = null;
    this.first = this.first.next;
    this.length--
    firstNode.next = null
    return firstNode
  }
}
