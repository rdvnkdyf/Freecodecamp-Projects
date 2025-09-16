var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function(data) {
    if (!this.head) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      let newNode = new Node(data, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  this.reverse = function() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let temp = null;

    // Swap head and tail
    [this.head, this.tail] = [this.tail, this.head];

    while (currentNode) {
      // Store the next node before overwriting the next reference
      temp = currentNode.next;
      // Swap the next and previous references
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      // Move to the next node in the original list
      currentNode = temp;
    }
  };
  // Only change code above this line
};