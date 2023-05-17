var Queue = function() {
  var size = 0;
  var next = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > next) {
      var value = storage[next];
      delete storage[next];
      next++;
      return value;
    }
  };

  someInstance.size = function() {
    return size - next;
  };

  return someInstance;
};
var queue = Queue()

