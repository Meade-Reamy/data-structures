var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.storage.item) {
    this.storage[item] = item;
  }
  // console.log(`this ran ${item}`)
  // console.log(this.storage);
};

setPrototype.contains = function(item) {
  return this.storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this.storage[item];

};
/*
 * Complexity: What is the time complexity of the above functions?
  O(1);
 */
