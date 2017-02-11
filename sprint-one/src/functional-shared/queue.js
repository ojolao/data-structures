var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance._storage = {};
  someInstance._size = 0;
  someInstance._counter = 1;

  _.extend(someInstance, queueMethods);


  // Implement the methods below
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._size++;
  this._storage[this._size] = value;
};

queueMethods.dequeue = function() {
  var result = this._storage[1];
  this._storage[1] = undefined;
  if (this._storage[this._counter] === undefined && this._storage[parseInt(this._counter) + 1] !== undefined) {
    this._storage[this._counter] = this._storage[parseInt(this._counter) + 1];
    this._counter++;
  }
  delete this._storage[this._size];
  this._size--;
  if (this._size < 0) {
    this._size = 0;
  }
  return result;
};

queueMethods.size = function() {
  return this._size;
};
