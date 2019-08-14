class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  getParentIdx(idx) {
    return Math.floor((idx-1)/2)
  }

  swap(idx1, idx2, arr=this.values) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    if (!this.values.length) return this.values.push(newNode);
    let idx = this.values.length
    this.values.push(newNode)
    let parentIdx = this.getParentIdx(idx)
    while (priority < this.values[parentIdx].priority) {
      this.swap(idx, parentIdx)
      idx = parentIdx
      parentIdx = this.getParentIdx(idx)
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length
    const priority = this.values[0].priority
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = leftIdx + 1;
      let leftPriority, rightPriority;
      let swap = null
      if (leftIdx < length) {
        leftPriority = this.values[leftIdx].priority
        if (leftPriority < priority) {
          swap = leftIdx
        }
        if (rightIdx < length) {
          rightPriority = this.values[rightIdx].priority
          if (rightPriority < leftPriority && rightPriority < priority) {
            swap = rightIdx
          }
        }
      }
      if (swap === null) return;
      this.swap(swap, idx)
      idx = swap;
    }
  }

  dequeue() {
    const topPriority = this.values[0]
    const last = this.values.pop()
    if (this.values.length > 1) {
      this.values[0] = last
      this.sinkDown()
    }
    return topPriority;
  }
}

let pq = new PriorityQueue()

pq.enqueue("interviews", 1)
pq.enqueue("pack", 1)
pq.enqueue("sleep", 3)
pq.enqueue("study", 1)
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
