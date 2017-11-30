var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  obj.count = 0;

  return obj;
};

var stackMethods = {

  pop: function() {
    let index = this.count;
    let res = this[index - 1];
    delete this[index - 1];
    if (this.count > 0) {
      this.count--;
    }
    
    return res;
  },

  push: function(value) {
    this[this.count] = value;
    this.count++;
    return this;  
  },

  size: function() {  
    return this.count;
  }
  
};




