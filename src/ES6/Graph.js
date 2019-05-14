class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertexId) {
    // Assign vertix to itself if it already exists
    this.adjList[vertexId] = this.adjList[vertexId] || [];
  }

  addVertices(list, vertexIdKeyName) {
    list.forEach(listItem => this.addVertex(listItem[vertexIdKeyName]));
  }

  addEdge(firstVertex, secondVertex) {
    this.adjList[firstVertex].push(secondVertex);
  }

  traverseDF(vertexId, callback, visited = {}, distance = 0) {
    visited[vertexId] = true;
    callback(vertexId, distance);
    this.adjList[vertexId].forEach(neighbourVertex => {
      if (visited[neighbourVertex]) {
        return;
      }
      this.traverseDFS(neighbourVertex, callback, visited, distance + 1);
    });
  }

  traverseBF(initialVertextId, callback, visited = {}, queue = []) {
    queue = [initialVertextId];
    visited[initialVertextId] = 0;
    while (queue.length) {
      const currentVertext = queue.shift();
      callback(currentVertext, visited[currentVertext]);
      const neighbours = this.adjList[currentVertext].filter(neighbour => {
        if (visited[neighbour] === undefined) {
          visited[neighbour] = visited[currentVertext] + 1;
          return true;
        }
      });
      queue = queue.concat(neighbours);
    }
  }
}
