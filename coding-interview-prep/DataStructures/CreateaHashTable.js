var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = function(key, value) {
    const hashedKey = hash(key);
    if (!this.collection[hashedKey]) {
      this.collection[hashedKey] = [];
    }
    this.collection[hashedKey].push([key, value]);
  };

  this.remove = function(key) {
    const hashedKey = hash(key);
    if (this.collection[hashedKey]) {
      this.collection[hashedKey] = this.collection[hashedKey].filter(item => item[0] !== key);
      if (this.collection[hashedKey].length === 0) {
        delete this.collection[hashedKey];
      }
    }
  };

  this.lookup = function(key) {
    const hashedKey = hash(key);
    if (this.collection[hashedKey]) {
      for (let i = 0; i < this.collection[hashedKey].length; i++) {
        if (this.collection[hashedKey][i][0] === key) {
          return this.collection[hashedKey][i][1];
        }
      }
    }
    return null;
  };
  // Only change code above this line
};
