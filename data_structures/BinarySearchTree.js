class Node {
  constructor(val) {
    this.val = val;
    this.frequency = 1;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this
    }
    let inspect = this.root
    while (true) {
      if (newNode.val === inspect.val) {
        inspect.frequency++
        return this
      }
      if (newNode.val < inspect.val) {
        if (!inspect.left) {
          inspect.left = newNode
          return this
        }
        inspect = inspect.left;
      } else if (newNode.val > inspect.val) {
        if (!inspect.right) {
          inspect.right = newNode
          return this
        }
        inspect = inspect.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let inspect = this.root
    while (inspect) {
      if (val === inspect.val) return inspect;
      if (val < inspect.val) {
        inspect = inspect.left
      } else {
        inspect = inspect.right
      }
    }
    return false
  }

  bfs() { // breadth first search
    let queue = [] // use push and shift
    let nodes = []
    let inspect;
    if (!this.root) return nodes;
    queue.push(this.root)
    while (queue.length) {
      inspect = queue.shift()
      nodes.push(inspect.val)
      if (inspect.left) queue.push(inspect.left)
      if (inspect.right) queue.push(inspect.right)
    }
    return nodes
  }



  dfsPreOrder() {
    let nodes = []
    const traverse = (node) => {
      nodes.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return nodes
  }
}

let bst = new BinarySearchTree();
console.log(bst.insert(5));
console.log(bst.insert(4));
console.log(bst.insert(3));
console.log(bst.insert(9));
console.log(bst.insert(10));
console.log(bst.insert(7));
console.log(bst.find(4));
console.log(bst.find(2));
console.log(bst.dfsPreOrder());
