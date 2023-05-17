var Queue = function() {
  this.qsize = 0;
  this.next = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.qsize] = value;
  this.qsize++;
};

Queue.prototype.dequeue = function() {
  if (this.next < this.qsize) {
    var value = this.storage[this.next];
    delete this.storage[this.next];
    this.next++;
    return value;
  }
};

Queue.prototype.size = function() {
  return this.qsize - this.next;
};


