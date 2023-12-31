var Stack = function() {
  this.ssize = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.storage[this.ssize] = value;
  this.ssize++;
};

Stack.prototype.pop = function() {
  if (this.ssize > 0) {
    this.ssize--;
    var value = this.storage[this.ssize];
    delete this.storage[this.ssize];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.ssize;
};

