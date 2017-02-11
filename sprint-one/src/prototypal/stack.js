var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._counter = 0; 
  return instance;
};

var stackMethods = {
  push: function(value) {
    this._counter++;
    this._storage[this._counter] = value;
  },
  pop: function() {
    result = this._storage[this._counter];
    delete this._storage[this._counter];
    this._counter--;
    if (this._counter < 0) {
      this._counter = 0;
    }
    return result;
  },
  size: function() {
    console.log(this._counter);
    return this._counter;
  }
};


