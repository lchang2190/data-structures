var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  
  

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var flag = false;
   
  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    flag = this.children[i].contains(target);
    if (flag === true) {
      break;
    }
  }

  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
