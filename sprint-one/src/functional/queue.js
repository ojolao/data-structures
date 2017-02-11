var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[1];
    storage[1] = undefined;
    if (storage[counter] === undefined && storage[parseInt(counter)+ 1] !== undefined){
      storage[counter] = storage[parseInt(counter)+ 1];
      counter++;
    }
    delete storage[size];
    size--;
    if (size < 0){
      size = 0;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
