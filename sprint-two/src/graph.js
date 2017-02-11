

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
  console.log(this.nodes);
	
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
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var search = false;
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode && this.edges[toNode][i] === fromNode) {
      search = true;
    }
  }
  console.log(this.edges[fromNode], this.edges[toNode]);
  return search;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


