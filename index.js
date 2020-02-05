// Make your own merge sort
// 1. Implement a function that first finds and removes the smallest element in a sorted array.
// 2. Implement the merge function to combine two sorted arrays into one larger array.
// 3. Implement the mergeSort algorithm using the previous functions that you wrote.


// 1. Implement a function that first finds and removes the smallest element in a sorted array.

// Solve with an example
// function findMinAndRemoveSortedExample (array) {
//    array.shift()
// }
// Since this is just getting the minimum out of an ALREADY SORTED array, I really just need to grab the value at index 0. 
//let array = [2, 3, 4, 5]
//console.log("Example: ", findMinAndRemoveSortedExample(array))

function findMinAndRemoveSorted (array) {
   let value = array[0]
   array.shift()
   return value
}

// 2. Implement the merge function to combine two ALREADY SORTED arrays into one larger array.
function merge(array1, array2) {
   const merged = []
   let value
   while (array1.length !== 0 && array2.length !== 0) {
      if (array1[0] < array2[0]) {
         value = findMinAndRemoveSorted(array1)
         merged.push(value)
      } else {
         value = findMinAndRemoveSorted(array2)
         merged.push(value)
      }
   }
   return merged.concat(array1).concat(array2)
}

// 3. Implement the mergeSort algorithm using the previous functions that you wrote.
// given an unsorted array of [3, 7, 2, 1, 10, 9], use merge sort, to sort them. 
function mergeSort(unsorted) {
   // I will recursively split my array until I get to a array length of 1, once I have an array length of 1, return that ARRAY.
   // this will then let all the recurive functions in limbo start to solve themselves (the merge function can actually run now)
   // then once they have solved themselves, the return the original "unsorted" array as a "sorted" array now. 
   let middle = unsorted.length/2 
   let firstHalf = unsorted.slice(0, middle) 
   let secondHalf = unsorted.slice(middle, unsorted.length) 
   // used for debugging purposes. 
   // console.log(`firstHalf: ${JSON.stringify(firstHalf)}, secondHalf: ${JSON.stringify(secondHalf)}`)
   // console.log("end split")
   let sorted

   if (unsorted.length < 2) {
         return unsorted
   } else {
      sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
   }
   return sorted 
}
// console.log(mergeSort([3, 7, 2, 1, 10, 9, 8, 11]))

