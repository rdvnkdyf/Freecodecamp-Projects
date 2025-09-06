function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        // Checking if the new element has a higher priority than the current element
        // Note: Lower priority number means higher priority.
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };

  this.dequeue = function() {
    if (this.isEmpty()) {
      return null;
    }
    const element = this.collection.shift();
    return element[0];
  };

  this.size = function() {
    return this.collection.length;
  };

  this.front = function() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection[0][0];
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };
  // Only change code above this line
}