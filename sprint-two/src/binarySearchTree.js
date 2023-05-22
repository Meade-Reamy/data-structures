class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  insert (input) {
    if (this.value === null) {
      this.value = new Node(input);
    } else {
      const node = this;
      const searchTree = node => {
        if (input < node.value && node.left) {
          searchTree(node.left);
        } else if (input < node.value && !node.left) {
          node.left = new Node(input);
        } else if (input > node.value && node.right) {
          searchTree(node.right);
        } else if (input > node.value && !node.right) {
          node.right = new Node(input);
        }
      };
      return searchTree(node);
    }
  }
  contains(target) {
    let node = this;
    if (!target) {
      return false;
    }
    while (node !== target && node !== null) {
      if (node.value === target) {
        return true;
      } else if (node.value < target) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return false;
  }
  depthFirstLog(cb) {
    if (this.value === null) {
      return;
    } else {
      const func = node => {
        cb(node.value);
        if (node.left) {
          func(node.left);
        }
        if (node.right) {
          func(node.right);
        }
      };
      let result = func(this);
      return result;
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
