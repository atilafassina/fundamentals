const LinkedList = require('.')

describe('Linked List', () => {
  const list = new LinkedList()
  it('should lenght 0', () => {
    expect(list.getLength()).toBe(0)
  })
})
