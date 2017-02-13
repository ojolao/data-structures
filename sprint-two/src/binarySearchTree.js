var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newValue) {  
  if (newValue > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(newValue);
    } else if (this.right !== null) {
      this.right.insert(newValue);
    }
  } else if (newValue < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(newValue);
    } else if (this.left !== null) {
      this.left.insert(newValue);
    }
  }
};
BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var current = this;
  var search = function(obj) {
    if (obj.value === value) {
      result = true;
    }

    if (obj.left !== null) {
      search(obj.left);
    }
    if (obj.right !== null) {
      search(obj.right);
    }
    return result;
  };
  search(current);
  return result;
};
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  debugger;
  var current = this;
  var run = function (element) {
    cb(element);

    if (element.left !== null) {
      run(element.left);
    }
    if (element.right !== null) {
      run(element.right);
    }
  };
  run(current);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
