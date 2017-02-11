var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  search = function (node) {
    if (node.value === target) {
      result = true; 
    }
    node.children.forEach(function(child) {
      search(child);
    });
  };
  search(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
