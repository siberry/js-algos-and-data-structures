class Graph { // undirected
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
}

let g = new Graph()

g.addVertex("tokyo")
g.addVertex('aspen')

g.addEdge("tokyo", "aspen")

console.log(g);
