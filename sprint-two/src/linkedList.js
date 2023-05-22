var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Object.create(LLnode(value));
    let current;
    //edge case : the list is empty
    if (!list.head) {
      list.head = newNode;
    } else {
      current = list.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {

    var val = list.head.value;
    list.head = list.head.next;
    return val;
  };

  list.contains = function(target) {
    let current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;

  };

  return list;
};

var LLnode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
