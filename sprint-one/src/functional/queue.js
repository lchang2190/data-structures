var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = someInstance.size();
    storage[index] = value;
    return storage;
  };

  someInstance.dequeue = function() {
   
    
  };

  someInstance.size = function() {
    var count = 0;
    for (var prop in storage) {
      count++;  
    }
    return count;
    
  };

  return someInstance;
};











 /*var keyz = Object.keys(storage);
    var index = keyz[0];
//console.log('before shift', keyz);
    var del = storage[index];
    delete storage[index];
//console.log('after shift', keyz)
    return del;*/