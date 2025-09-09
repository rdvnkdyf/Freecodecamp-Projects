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

  this.removeAt = function(index) {
    if (index < 0 || index >= length) {
      return null;
    }

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = currentNode.next;
    }

    length--;
    return currentNode.element;
  };
}
