var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
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
    // 3. test: Ağaç boşsa null döndür.
    if (this.root === null) {
      return null;
    }

    // Silinecek düğümü ve ebeveynini bulma.
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

    // 4. test: Düğüm ağaçta yoksa null döndür.
    if (targetNode === null) {
      return null;
    }
    
    // Yalnızca yaprak düğümlerini (hiç çocuğu olmayan düğümler) silme.
    // Bu kısım, 6. testin mantığını içerir.
    if (targetNode.left === null && targetNode.right === null) {
      // 5. test: Silinecek düğüm kök ise ve tek başına duruyorsa
      if (parentNode === null) {
        this.root = null;
      } else if (parentNode.left === targetNode) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }
    // Gelecek zorluklar için: Diğer silme durumları (bir veya iki çocuğu olan düğümler) burada ele alınmayacak.
  };
  // Only change code above this line
}