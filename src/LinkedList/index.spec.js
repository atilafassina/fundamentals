const LinkedList = require('.')

describe('Linked List', () => {
  const list = new LinkedList()
  it('should lenght o 0', () => {
    expect(list.getLength()).toBe(0)
  })
})
