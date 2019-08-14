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
    const nodes = new SimplePriorityQueue();
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

class SimplePriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({val, priority})
    this.sort();
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a,b) => a.priority - b.priority)
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
