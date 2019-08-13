class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (this.size === 0) this.last = newNode;
    else {
      newNode.next = this.first
    }
    this.first = newNode
    return ++this.size
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) this.last = null;
    let poppedNode = this.first;
    this.first = this.first.next;
    poppedNode.next = null;
    this.size--
    return poppedNode
  }
}

let stack = new Stack()

console.log(stack.push("study"));
console.log(stack.push("change clothes"));
console.log(stack.size);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
