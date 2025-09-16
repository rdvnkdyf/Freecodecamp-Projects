var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inorder = function() {
    if (this.root === null) {
      return null;
    }
    const result = [];
    function traverseInOrder(node) {
      if (node.left) {
        traverseInOrder(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverseInOrder(node.right);
      }
    }
    traverseInOrder(this.root);
    return result;
  };

  this.preorder = function() {
    if (this.root === null) {
      return null;
    }
    const result = [];
    function traversePreOrder(node) {
      result.push(node.value);
      if (node.left) {
        traversePreOrder(node.left);
      }
      if (node.right) {
        traversePreOrder(node.right);
      }
    }
    traversePreOrder(this.root);
    return result;
  };

  this.postorder = function() {
    if (this.root === null) {
      return null;
    }
    const result = [];
    function traversePostOrder(node) {
      if (node.left) {
        traversePostOrder(node.left);
      }
      if (node.right) {
        traversePostOrder(node.right);
      }
      result.push(node.value);
    }
    traversePostOrder(this.root);
    return result;
  };

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
        return null; // Duplicate value
      }
    }
  };
  // Only change code above this line
}