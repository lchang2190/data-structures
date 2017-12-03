 

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
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    let bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    let flag = false;
    
    let bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        flag = true;
      }
    }
    if (flag === false) {
      this._storage.get(index).push(tuple);   
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use get() to use the index to get the key:val
  
  var bucket = this._storage.get(index);
  
    for (var i = 0; i < bucket.length; i++) {
    console.log(bucket[i]);
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
    
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check to see if index has buckets
    //if index has buckets
    //
  let bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
    
  }
  
};

var hash = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 */


