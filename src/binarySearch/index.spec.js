const binarySearch = require('.')

const mock = [
  10,
  12,
  22,
  55,
  70,
  100,
  300,
  540,
  3405,
  3423,
  9000
]

describe('binary search', () => {

  mock.map(number => (
    it(`should return ${mock.indexOf(number)}, the index of ${number}`, () => {
    
      expect(binarySearch(mock, number)).toEqual(mock.indexOf(number))
    })
  ))
})