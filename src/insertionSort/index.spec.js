const insertionSort = require('.')

const unsorted = [54, 26, 93, 17, 77, 31, 44, 55, 20]
const sorted = [17, 20, 26, 31, 44, 54, 55, 77, 93]


describe('insertion sort', () => {
  it('should return a sorted array', () => {
    expect(insertionSort(unsorted)).toEqual(sorted)
  })
})