// Acception Criteria
// ==================
// - No loops
// - returns the index of the item

function binarySearch(list, value, start = 0, stop, middle) {
  stop = stop || list.length - 1
  middle = middle || Math.floor((start + stop) / 2)

  if (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      
      stop = middle - 1
    } else {

      start = middle + 1
    }
    
    middle = Math.floor((start + stop) / 2 )

    return binarySearch(list, value, start, stop, middle)
  }

  return middle
} 

module.exports = binarySearch