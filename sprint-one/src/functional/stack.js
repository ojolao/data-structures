var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var result = storage[size];
    delete storage[size];
    size--;
    if (size < 0) {
      size = 0;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
