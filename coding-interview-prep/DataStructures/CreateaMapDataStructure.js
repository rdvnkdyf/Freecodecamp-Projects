var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value;
  };

  this.remove = (key) => {
    delete this.collection[key];
  };

  this.get = (key) => {
    return this.collection[key];
  };

  this.has = (key) => {
    return this.collection.hasOwnProperty(key);
  };

  this.values = () => {
    return Object.values(this.collection);
  };

  this.size = () => {
    return Object.keys(this.collection).length;
  };

  this.clear = () => {
    this.collection = {};
  };
  // Only change code above this line
};
