// Write a JavaScript function to implement a graph using an adjacency list.

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
  
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('Tokyo');
  graph.addVertex('Kyoto');
  graph.addEdge('Tokyo', 'Kyoto');
  console.log(graph.adjacencyList);

// Implement a DFS algorithm on a graph represented as an adjacency list in JavaScript.

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    dfs(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
  
      (function dfsRecursive(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return dfsRecursive(neighbor);
          }
        });
      })(start);
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('Tokyo');
  graph.addVertex('Kyoto');
  graph.addEdge('Tokyo', 'Kyoto');
  graph.addVertex('Osaka');
  graph.addEdge('Kyoto', 'Osaka');
  console.log(graph.dfs('Tokyo')); // ['Tokyo', 'Kyoto', 'Osaka']

// Write a JavaScript function to perform BFS on a graph.

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = { [start]: true };
      let currentVertex;
  
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('Tokyo');
  graph.addVertex('Kyoto');
  graph.addEdge('Tokyo', 'Kyoto');
  graph.addVertex('Osaka');
  graph.addEdge('Kyoto', 'Osaka');
  console.log(graph.bfs('Tokyo')); // ['Tokyo', 'Kyoto', 'Osaka']
  
//   Write a function in JavaScript to find all connected components of an undirected graph.
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    dfs(vertex, visited, component) {
      visited[vertex] = true;
      component.push(vertex);
  
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited, component);
        }
      });
    }
  
    findConnectedComponents() {
      const visited = {};
      const components = [];
  
      for (let vertex in this.adjacencyList) {
        if (!visited[vertex]) {
          const component = [];
          this.dfs(vertex, visited, component);
          components.push(component);
        }
      }
  
      return components;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addEdge('A', 'B');
  graph.addEdge('C', 'D');
  console.log(graph.findConnectedComponents()); // [['A', 'B'], ['C', 'D']]
  
// How would you detect a cycle in a directed graph using JavaScript?

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      this.adjacencyList[vertex1].push(vertex2);
    }
  
    isCyclicUtil(vertex, visited, recStack) {
      if (!visited[vertex]) {
        visited[vertex] = true;
        recStack[vertex] = true;
  
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor] && this.isCyclicUtil(neighbor, visited, recStack)) {
            return true;
          } else if (recStack[neighbor]) {
            return true;
          }
        }
      }
      recStack[vertex] = false;
      return false;
    }
  
    detectCycle() {
      const visited = {};
      const recStack = {};
  
      for (let vertex in this.adjacencyList) {
        if (this.isCyclicUtil(vertex, visited, recStack)) {
          return true;
        }
      }
      return false;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'A'); // This creates a cycle
  
  console.log(graph.detectCycle()); // true
  