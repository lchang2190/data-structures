var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  
  // Implement the methods below
  someInstance.push = function(value) {
    var index = someInstance.size() + 1;
    storage[index] = value;
    count++;
    return storage;
  };

  someInstance.pop = function() {
    var index = someInstance.size();
    var del = storage[index];
    delete storage[index];
    if ( count > 0) {
      count--;
    }
    return del;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

