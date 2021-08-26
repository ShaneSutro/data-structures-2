

// Instantiate a new graph
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if (this.contains(node)) {
    let edges = this.storage[node];
    for (let i = 0; i < edges.length; i++) {
      const pairedEdges = this.storage[edges[i]];
      for (let j = 0; j < pairedEdges; j++) {
        if (pairedEdges[j] === node) {
          this.storage[edges[i]].splice(j, 1);
        }
      }
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  const fromNodeEdges = this.storage[fromNode];
  for (let i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  console.log(`Adding node from ${fromNode} to ${toNode}`);
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let edges = this.storage[fromNode];
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      this.storage[fromNode].splice(i, 1);
    }
  }
  let pairedEdges = this.storage[toNode];
  for (let i = 0; i < pairedEdges.length; i++) {
    if (pairedEdges[i] === fromNode) {
      this.storage[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  const allKeys = Object.keys(this.storage);
  for (let i = 0; i < allKeys.length; i++) {
    cb(allKeys[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


