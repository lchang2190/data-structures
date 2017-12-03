 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //set up key value pair
  //check index if undefined
    // if undefined, create bucket;
    //insert tuple to bucket;
  let tuple = [];
  tuple[0] = k;
  tuple[1] = v;
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
 
  if (this._storage.get(index) !== undefined) {
    
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use get() to use the index to get the key:val
  
  return this._storage.get(index)[1][1];
    
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check to see if index has buckets
    //if index has buckets
    //
  this._storage.each(function(pos) {
    if (pos !== undefined) {
      for (var i = 0; i < pos.length; i++) {
        if (pos[i].indexOf(k)) {
          pos[i] = undefined;
        }
      }
    }
  });
  
};

var hash = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 */


