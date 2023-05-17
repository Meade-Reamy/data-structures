var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.ssize = 0;
  someInstance.storage = {};
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    this.storage[this.ssize] = value;
    this.ssize++;
  },

  pop: function() {
    if (0 < this.ssize) {
      this.ssize--;
      var value = this.storage[this.ssize];
      delete this.storage[this.ssize];
      return value;
    }
  },

  size: function() {
    return this.ssize;
  }
};


