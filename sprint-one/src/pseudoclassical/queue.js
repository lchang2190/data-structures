var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
  return this;
};

Queue.prototype.dequeue = function() {
  var keyz = Object.keys(this);
  var del = this[keyz[0]];
  delete del;
  if (this.count > 0) {
    this.count--;
  }
  for (var i = 0; i < this.count; i++) {
    this[i] = this[i + 1];
  }
  return del;
};

Queue.prototype.size = function () {
  return this.count;
};

var queue = new Queue;

