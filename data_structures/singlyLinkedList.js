class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  print() {
    let node = this.head
    while (node.next) {
      console.log(node.val)
      node = node.next
    }
    console.log(this.tail.val)
  }

  reverse() {
    [this.head,this.tail] = [this.tail,this.head]
    let current = this.tail
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next
      current.next = prev;
      prev = current
      current = next
    }
    return this;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) return false;
    let node = this.head
    for (let i = 0; i < idx; i++) {
      node = node.next
    }
    return node
  }

  set(val, idx) {
    let foundNode = this.get(idx)
    if (foundNode) foundNode.val = val
    return !!foundNode
  }

  insert(val, idx) {
    let newNode = new Node(val);
    if (idx === this.length) return !!this.push(newNode);
    if (idx === 0) return !!this.unshift(newNode);

    let prev = this.get(idx-1);
    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true
    }
    return false
  }

  remove(idx) {
    if (idx === this.length) return this.pop();
    if (idx === 0) return this.shift();
    let removedNode = get(idx)
    if (removeNode) {
      get(idx - 1).next = removeNode.next
      this.length--
      removeNode.next === null
      return removeNode;
    }
    return false;
  }

  emptyList() {
    let oldHead = this.head;
    this.head = null;
    this.tail = null;
    this.length = null;
    return oldHead
  }

  push(val) {
    let newNode = new Node(val);
    this.head ? this.tail.next = newNode : this.head = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  unshift(val) {
    let newNode = new Node(val);
    this.head ? newNode.next = this.head : this.tail = newNode;
    this.head = newNode
    this.length++
    return this
  }

  pop() {
    if (this.head === null) return;
    if (this.length === 1) return this.emptyList();
    let current = this.head
    let newTail = current
    while(current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    return current
  }

  shift() {
    if (this.head === null) return;
    if (!this.head.next) return this.emptyList();
    let oldHead = this.head
    this.head = this.head.next
    this.length--
    oldHead.next = null
    return oldHead
  }
}

let list = new SinglyLinkedList()
console.log(list.push("Serena!"))
console.log(list.push("Justin!"));
console.log(list.push("<3")); // justin -> serena -> bukas
console.log(list.push("Bukas!"));

list.print()
list.reverse()
list.print()
console.log(list)
// //
// console.log(list)
// console.log(list.reverse())
// console.log(list.head)
// console.log(list.get(0))

// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
