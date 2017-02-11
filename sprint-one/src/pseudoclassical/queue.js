
var Queue = function() {
  // Use an object with numeric keys to store values
  this._storage = {};
  this._size = 0;
  this._counter = 1;


  // Implement the methods below

};

Queue.prototype.enqueue = function(value) {
  this._size++;
  this._storage[this._size] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this._size;
};
