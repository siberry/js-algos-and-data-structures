class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  swap(i, j, arr=this.values) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  getParentIdx(idx) {
    return Math.floor((idx-1)/2)
  }

  // idxOfGreaterChild(parentIdx) {
  //   let leftIdx = 2 * parentIdx + 1
  //   if (leftIdx > this.values.length - 1) return false;
  //   if (leftIdx === this.values.length - 1) return leftIdx;
  //   let leftChild = this.values[leftIdx]
  //   let rightChild = this.values[leftIdx + 1]
  //   return leftChild > rightChild ? leftIdx : leftIdx + 1
  // }

  insert(val) {
    let idx = this.values.length
    this.values.push(val)
    let parentIdx = this.getParentIdx(idx)
    while (val > this.values[parentIdx]) {
      this.swap(idx, parentIdx)
      idx = parentIdx
      parentIdx = this.getParentIdx(idx)
    }
  }

  sinkDown() { // tricky part
    let idx = 0;
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = leftChildIdx + 1;
      let leftChild, rightChild;
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx]
          if (rightChild > leftChild && rightChild > element) {
            swap = rightChildIdx
          }
        }
      }
      if (swap === null) return;
      this.swap(swap, idx)
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 1) {
      this.values[0] = end
      this.sinkDown()
    }
    return max;
  }
}

let mbh = new MaxBinaryHeap()

mbh.insert(10)
mbh.insert(4)
mbh.insert(11)
mbh.insert(15)
mbh.insert(12)
mbh.insert(16)
mbh.insert(17)
mbh.insert(13)
mbh.insert(5)
mbh.insert(12)
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
mbh.extractMax()
console.log(mbh.values);
mbh.extractMax()
console.log(mbh.values);
mbh.extractMax()
console.log(mbh.values);
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());

console.log(mbh.values);
