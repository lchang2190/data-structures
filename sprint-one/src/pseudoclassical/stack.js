var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this[this.count] = value;
  this.count++;
  //console.log(this);
  return this;
};

Stack.prototype.pop = function() {
  var del = this[this.count - 1];
  delete del;
  if (this.count > 0) {
    this.count--;
  }
  return del;
};

Stack.prototype.size = function() {
  return this.count;
};

let obj = new Stack();

