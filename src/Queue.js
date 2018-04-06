function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype = {

  enqueue: function(item) {

    if(this.count < this._capacity) {
      this._storage[this._tail++] = item;
      return this.count;
    }

    return 'Maximum capacity reached. Remove an element before adding a new one';
  },

  dequeue: function() {

    let item = this._storage[this._head];
    delete this._storage[this._head];

    if (this._head < this._tail) {
      this._head = this._head + 1;
    }

    return item;
  },

  peek: function() {
    return this._storage[this._head];
  },

  count: function() {
    return this._tail - this._head;
  },

  capacity: function() {
    return this._capacity;
  }

};

module.exports = Queue;
