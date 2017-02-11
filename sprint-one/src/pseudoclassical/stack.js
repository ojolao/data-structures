var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._counter = 0; 
};

Stack.prototype.push = function(value) {
  this._counter++;
  this._storage[this._counter] = value;
};
Stack.prototype.pop = function() {
  result = this._storage[this._counter];
  delete this._storage[this._counter];
  this._counter--;
  if (this._counter < 0) {
    this._counter = 0;
  }
  return result;
};
Stack.prototype.size = function() {
  return this._counter;
};


