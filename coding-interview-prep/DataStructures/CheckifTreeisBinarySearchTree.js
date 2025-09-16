var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

function isBinarySearchTree(tree) {
  // Only change code below this line
  function isBST(node, min, max) {
    if (node === null) {
      return true;
    }

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    return (
      isBST(node.left, min, node.value) &&
      isBST(node.right, node.value, max)
    );
  }

  return isBST(tree.root, null, null);
  // Only change code above this line
}