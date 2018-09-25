function insertionSort(unsortedList) {

  for (let i = 1; i < unsortedList.length; i++) {
    const currentItem = unsortedList[i]
    let j

    for (j = i; j > 0 && currentItem < unsortedList[j - 1]; j--) {
      unsortedList[j] = unsortedList[j - 1]
    }

    unsortedList[j] = currentItem
  }

  return unsortedList
  
} 

module.exports = insertionSort