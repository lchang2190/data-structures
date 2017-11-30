var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {};
  _.extend(obj, queueMethods);
  obj.count = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count] = value;
    this.count++;
    return this; 
    
  },
  
  dequeue: function() {
    let keyz = Object.keys(this);
    
    let del = this[keyz[0]];
    
    delete del;
    if (this.count > 0) {
      this.count--;
    }

    for (var i = 0; i < this.count; i++) {
      this[i] = this[i + 1];
    }
    return del;
  },

  size: function() {
    return this.count;
  }
};


