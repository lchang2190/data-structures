var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let obj = Object.create(stackMethods);
  obj.count = 0;

  return obj;
};

var stackMethods = {
  push: function(value) {
    var index = this.count;
    this[this[index]] = value;
    this.count++;
    return this;
  },

  pop: function() {
    var index = this.count;
    var del = this[this.index];
    console.log(del);
    delete this[this.index];
    if (this.count > 0) {
      this.count--;
    }
    console.log(this);
    return del;
  },

  size: function() {
    return this.count;
  }
};


