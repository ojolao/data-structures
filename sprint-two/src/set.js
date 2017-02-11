var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  result = false;
  this._storage.forEach(function(element) {
    (item === element) ? result = true : result;
  });
  return result;
};

setPrototype.remove = function(item) {
  currentSet = this._storage;
  currentSet.forEach(function(element) {
    if (item === element) { 
      currentSet.splice(currentSet.indexOf(element), 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
