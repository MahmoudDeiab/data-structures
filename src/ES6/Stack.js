class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push = item => {
    this._storage[this._length] = item;
    this._length++;
  };

  pop = () => {
    if (this._length) {
      const lastItem = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      return lastItem;
    }
  };

  peek = () => {
    return this._storage[this._length - 1];
  };
}

export default Stack;
