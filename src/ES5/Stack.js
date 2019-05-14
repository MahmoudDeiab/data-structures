function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype = {

  push: function(item) {

    if(this._count < this._capacity) {
      this._storage[this._count++] = item;
      return this._count;
    }

    return 'Maximum capacity reached. Remove an element before adding a new one';
  },

  pop: function() {

    let item = this._storage[--this._count];

    delete this._storage[this._count];

    if (this._count < 0) {
      this._count = 0;
    }

    return item;
  },

  peek: function() {
      return this._storage[this._count-1];
  },

  count: function() {
    return this._count;
  },

  capacity: function() {
    return this._capacity;
  }

};

module.exports = Stack;
