var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    //create a tree object{children:[], value:num} where value is the child node    tree.children[0].chirldren[0]
    var child = new Tree(value);
    child.value = value;
    // push node to parent tree's node as child
    this.children.push(child);
    // set value as passed in value
  },

  contains: function(target) {
    var found = false;

    const searchThroughChildren = function(tree) {
      if (target === tree.value) {
        found = true;
      }
      for (let el of tree.children) {
        searchThroughChildren(el);
      }
    };
    searchThroughChildren(this);
    return found;
  /*
    bool variable to set whether found innitially set to false
    function which takes a tree
      if target is equel to value set found to true
      if found === true return
      for lenght of chirldren
        recursivly call function
    return found
    */
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
