class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.next = 0;
    this.qsize = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.qsize] = value;
    this.qsize++;
  }

  dequeue() {
    if (this.next < this.qsize) {
      var value = this.storage[this.next];
      delete this.storage[this.next];
      this.next++;
      return value;
    }
  }

  size() {
    return this.qsize - this.next;
  }

}
