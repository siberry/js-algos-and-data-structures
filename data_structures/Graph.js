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

  dfsRecursive(startVert) { // goes from start of adjacencyList
    let results = []
    const visited = {}
    const dfs = (vert) => {
      if (!vert) return;
      visited[vert] = true
      results.push(vert)
      this.adjacencyList[vert].forEach(adjVert => {if (!visited[adjVert]) dfs(adjVert)})
    }
    dfs(startVert)
    return results
  }

  dfsIterative(start) { // goes from end of adjacencyList b/c of stack LIFO logic
    let results = []
    let stack = [start]
    const visited = {}
    visited[start] = true
    let vert
    while (stack.length) {
      vert = stack.pop()
      results.push(vert)
      this.adjacencyList[vert].forEach(adjVert => {
        if (!visited[adjVert]) {
          visited[adjVert] = true
          stack.push(adjVert)
        }
      })
    }
    return results
  }

  bfs(start) {
    let queue = [start]
    let results = []
    let visited = {}
    visited[start] = true

    let vert;
    while (queue.length) {
      vert = queue.shift()
      results.push(vert)
      this.adjacencyList[vert].forEach(adjVert => {
        if (!visited[adjVert]) {
          visited[adjVert] = true
          queue.push(adjVert)
        }
      })
    }
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
console.log(g.dfsIterative('B'));
console.log(g.bfs('A'));
