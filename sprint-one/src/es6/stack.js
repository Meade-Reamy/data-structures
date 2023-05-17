class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.ssize = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.ssize] = value;
    this.ssize++;
  }

  pop() {
    if (this.ssize > 0) {
      this.ssize--;
      var value = this.storage[this.ssize];
      delete this.storage[this.ssize];
      return value;
    }
  }

  size() {
    return this.ssize;
  }

}