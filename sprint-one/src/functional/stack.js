var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var index = someInstance.size() + 1;
    storage[index] = value;
    return storage;
  };

  someInstance.pop = function() {
    var index = someInstance.size();
    var del = storage[index];
    delete storage[index];
    return del;
  };

  someInstance.size = function() {
    var count = 0;
    for (var prop in storage){
      count++;  
    }
    return count;
  };

  return someInstance;
};


