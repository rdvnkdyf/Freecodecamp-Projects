function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;
      while(currentNode.next){
        currentNode  = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function(element){
    if (head === null) {
      return null;
    }
    
    // If head node is to be removed
    if (head.element === element) {
      head = head.next;
      length--;
      return true;
    }

    var currentNode = head;
    var previousNode = null;

    // Traverse the list to find the node to be removed
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode.element === element) {
        // Reassign the next pointer of the previous node
        previousNode.next = currentNode.next;
        length--;
        return true;
      }
    }
    
    // If the element is not found
    return null;
  };
}