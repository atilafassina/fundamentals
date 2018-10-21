class LinkedList {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  getLength() {
    return this._length
  }
}

module.exports = LinkedList
