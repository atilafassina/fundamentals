<div align="center">
  <span>⭐ 🏈 🦄 🏀 🤘 🏉 ✨</span>
  <h1>FUNdamentals</h1>
  <p>Examples of classic algorithms in JavaScript.</p>
  <p>Check below for recommended use-cases on each of them and relevant tradeoffs.</p>
</div>

## Algorithms

### Binary Search

Requires a sorted `array` for it to work. Essentially a Binary Search break the array into 2 halves and check in which half range the target value may be. It's quite powerful for large data sets as it can avoid iterations, one can (should) perform a Binary Search knowing only two things: that the provided `array` is sorted (1), and the length of the given `array`(2).

[Implementation](https://github.com/atilafassina/fundamentals/tree/master/src/binarySearch)

### Insertion Sort

It‘s a simple to implement sort algorithm, not very efficient for large data sets, but quite efficiente and powerful for small ones. It can avoid confusion by not changing the order of equal set of keys. In a nutshell, Insertion Sort iterates twice through the `array`. First iteration corresponds to the target position, whilst second iteration is for comparison with future elements. Every time the current item is smaller than the comparison value, it is inserted in the current position and first iteration moves forward.

[Implementation](https://github.com/atilafassina/fundamentals/tree/master/src/insertionSort)
