

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var search = false;
  _.forEach(this.nodes, function(child) {
    (child === node) ? search = true : search = search; 
  });
  return search;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //search for node, if it matches, remove, search again
  if (this.nodes.indexOf(node) !== -1) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
  }
  if (this.edges[node].length > 0) {
    this.edges[node].length = 0;
  }
  this.edges.forEach(function(edge) {
    if (edge.indexOf(node) !== -1) {
      edge.splice(edge.indexOf(node), 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var search = false;
  if (this.edges[fromNode].indexOf(toNode) !== -1 && this.edges[toNode].indexOf(fromNode) !== -1) {
    search = true;
  }
  return search;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].indexOf(toNode) !== -1 && this.edges[toNode].indexOf(fromNode) !== -1) {
    this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
    this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


