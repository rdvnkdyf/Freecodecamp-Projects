var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function(element) {
    if (this.head === null) {
      this.head = new Node(element, null);
      this.tail = this.head;
    } else {
      let newNode = new Node(element, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  this.remove = function(element) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === element) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  };
  // Only change code above this line
};