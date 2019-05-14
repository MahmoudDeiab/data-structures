class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(item) {
    const lastIndex = this._headIndex + this._length;
    this._storage[lastIndex] = item;
    this._length++;
  }

  dequeue() {
    if (this._length) {
      const item = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      this._headIndex++;
      return item;
    }
  }

  peek() {
    return this._storage[this._headIndex];
  }
}

export default Queue;
