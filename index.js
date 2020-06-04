// Return and remove smallest element from sorted array
function findMinAndRemoveSorted(array) {
  return array.shift()
} 
// Test
// let testArray = [11, 12, 13, 14, 15]
// console.log(findMinAndRemoveSorted(testArray)) // 11


// Return 1 sorted array from 2 sorted input arrays
function merge(array1, array2) {
  let sortedArray = []
  
  while (array1.length !=0 && array2.length != 0) {
    let absMin = array1[0] < array2[0] ? findMinAndRemoveSorted(array1) : findMinAndRemoveSorted(array2)
    sortedArray.push(absMin)
  }

  return sortedArray.concat(array1).concat(array2)
}
// Test
// let firstSubarray = [3, 4, 6, 7]
// let secondSubArray = [1, 2, 5, 8]
// console.log(merge(firstSubarray, secondSubArray)) // [1, 2, 3, 4, 5, 6, 7, 8]


// Merge Sort
function mergeSort(array) {
  // 1. Divide array in 2
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  // Return array if only has single element; else recursively call to break down further.
  if(array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
// Test
let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
console.log(mergeSort(unsorted)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]