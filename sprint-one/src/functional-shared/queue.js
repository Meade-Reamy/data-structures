var Queue = function() {

  var someInstance = {
    next: 0,
    qsize: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.qsize] = value;
    this.qsize++;
  },

  dequeue: function() {
    if (this.next < this.qsize) {
      var value = this.storage[this.next];
      delete this.storage[this.next];
      this.next++;
      return value;
    }
  },

  size: function() {
    return this.qsize - this.next;
  }
};



