var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return undefined;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return undefined;
        }
        currentNode = currentNode.right;
      } else {
        return null;
      }
    }
  };

  this.levelOrder = function() {
    if (this.root === null) {
      return null;
    }
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  };

  this.reverseLevelOrder = function() {
    if (this.root === null) {
      return null;
    }
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);
      // fark burada: önce sağ sonra sol
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
    }
    return result;
  };
}
