// Instantiate a new graph
const Graph = function() {
  this.nodes = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  const newNode = {
    value: node,
    edges: []
  };
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (this.nodes[node]) {
    for (let i = 0; i < this.nodes[node].edges.length; i++) {
      let targetNode = this.nodes[node].edges[i];
      for (let idx = 0; idx < this.nodes[targetNode].edges.length; idx++) {
        if (this.nodes[targetNode].edges[idx] === node) {
          this.nodes[targetNode].edges.splice(idx, 1);
          break;
        }
      }
    }
    delete this.nodes[node];
  }

  //when delete remove edges to said node(maybe see remove edge method)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  const edgeArr = this.nodes[fromNode].edges;
  for (let idx = 0; edgeArr.length > idx; idx++) {
    if (edgeArr[idx] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add edge to both (fromnode & tonode)
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
  //go to node[edges] add
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let idx = 0; idx < this.nodes[fromNode].edges.length; idx++) {
    if (this.nodes[fromNode].edges[idx] === toNode) {
      this.nodes[fromNode].edges.splice(idx, 1);
      break;
    }
  }
  for (let idx = 0; idx < this.nodes[toNode].edges.length; idx++) {
    if (this.nodes[toNode].edges[idx] === fromNode) {
      this.nodes[toNode].edges.splice(idx, 1);
      break;
    }
  }
  //remove edge from fromnode remove head from tonode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //_.foreach every node.value do something
  Object.keys(this.nodes).forEach(node => node = cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


