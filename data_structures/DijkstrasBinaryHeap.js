class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight})
    this.adjacencyList[v2].push({node: v1, weight})
  }

  dijkstras(start, end) { // shortest path
    const nodes = new PriorityQueue(); // only difference; SimplePriorityQueue in first version
    const distances = {}
    const previous = {}

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    let smallest, nextNode, potential, nextNodeNode
    let path = []
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === end) {
        while (previous[smallest]) {
          path.unshift(smallest)
          smallest = previous[smallest]
        }
        path.unshift(start)
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let adjVert in this.adjacencyList[smallest]) {
          // find neighboring node
          nextNode = this.adjacencyList[smallest][adjVert]
          nextNodeNode = nextNode.node
          // calculate potential distance to neighboring node
          potential = distances[smallest] + nextNode.weight
          if (potential < distances[nextNodeNode]) {
            // update new smallest distance to neighbor
            distances[nextNodeNode] = potential
            // update previous order
            previous[nextNodeNode] = smallest
            // enqueue in priorityQ with new priority
            nodes.enqueue(nextNodeNode, potential)
          }
        }
      }
    }
    return path // path could be a linked list to allow better runtime of unshift
  } // end of dijkstras
}

class Node {
  constructor(value, priority) {
    this.val = value;
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
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
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

let g = new WeightedGraph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.dijkstras('A', 'E'));
