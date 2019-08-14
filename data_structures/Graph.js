class Graph { // undirected
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(vertex2 => removeVertex(vertex, vertex2))
    delete this.adjacencyList[vertex]
  }

  dfsRecursive(startVert) {
    let results = []
    const visited = {}
    const dfs = (vert) => {
      if (!vert) return;
      visited[vert] = true
      results.push(vert)
      this.adjacencyList[vert].forEach(adjVert => {
        if (!visited[adjVert]) dfs(adjVert);
      })
    }
    dfs(startVert)
    return results
  }
}

let g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.dfsRecursive('B'));
