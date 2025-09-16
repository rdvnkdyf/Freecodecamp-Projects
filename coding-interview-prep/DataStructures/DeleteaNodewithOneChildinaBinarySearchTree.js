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

  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }

    let targetNode = this.root;
    let parentNode = null;

    while (targetNode !== null && targetNode.value !== value) {
      parentNode = targetNode;
      if (value < targetNode.value) {
        targetNode = targetNode.left;
      } else {
        targetNode = targetNode.right;
      }
    }

    if (targetNode === null) {
      return null;
    }

    const children =
      (targetNode.left !== null ? 1 : 0) + (targetNode.right !== null ? 1 : 0);

    // Durum 1: Yaprak düğümünü silme (0 çocuklu)
    if (children === 0) {
      if (parentNode === null) {
        this.root = null;
      } else if (parentNode.left === targetNode) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }

    // Durum 2: Tek çocuğu olan düğümü silme
    else if (children === 1) {
      const childNode = targetNode.left !== null ? targetNode.left : targetNode.right;

      // Silinecek düğüm kök ise (parentNode === null)
      if (parentNode === null) {
        this.root = childNode;
      }
      // Silinecek düğüm, ebeveyninin sol çocuğu ise
      else if (parentNode.left === targetNode) {
        parentNode.left = childNode;
      }
      // Silinecek düğüm, ebeveyninin sağ çocuğu ise
      else {
        parentNode.right = childNode;
      }
    }
    // Durum 3 (Bu görev için gerekli değil, ancak kodun tamamı için): İki çocuğu olan düğümü silme
    // Bu kısım sonraki görevde ele alınacaktır.
    return targetNode.value;
  };
}