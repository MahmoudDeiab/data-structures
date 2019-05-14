let Stack = require('./Stack');

function MinStack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack(capacity);
}

MinStack.prototype = Object.create(Stack.prototype);

MinStack.prototype.push = function(item) {

  if (this._count < this._capacity) {
    if (this._min.peek() < item) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(item);
    }
    this._storage[this._count++] = item;
    return this._count;
  }
  return 'Maximum capacity reached. Remove an element before adding a new one';

};

MinStack.prototype.pop = function() {
  this._min.pop();

  let item = this._storage[--this._count];

  delete this._storage[this._count];

  if (this._count < 0) {
    this._count = 0;
  }

  return item;
};

MinStack.prototype.getMinimum = function() {
    return this._min.peek();
};

module.exports = MinStack;
