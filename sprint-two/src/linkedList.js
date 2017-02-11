var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    (this.tail === null) ? (this.tail = Node(value), this.head = this.tail) : (this.tail.next = Node(value), this.tail = this.tail.next);

  };

  list.removeHead = function() {
    if (this.head !== null) {
      var result = this.head.value;
      this.head = this.head.next;
      (this.head === null) ? this.tail = null : this.tail = this.tail; 
      return result;
    }
    //no nodes
    //head and tail are same thing
  };

  list.contains = function(target) {
    var search = false;
    _.forEach(list, function(node) {
      (node.value === target) ? search = true : search = search; 
    });
    return search; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.current = null;

  list.addToTail = function(value) {
    this.tail = Node(value);
    this.current = this.current || this.tail;
    this.head = this.head || this.current;
    this.head.next = this.current;
    this.current.next = this.tail;

  };

  list.removeHead = function() {
    var result = this.head.value;
    (this.head === this.current) ? (this.head = this.tail, delete this.current) : this.head = this.current; 

    return result;
  };

  list.contains = function(target) {
    console.log(list);
    var search = false; 
    _.forEach(list, function(node){
      (node.value === target) ? search = true : search; 
    });
    return search;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
 * Complexity: What is the time complexity of the above functions?
 */
