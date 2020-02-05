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
   return array.shift()
}

// 2. Implement the merge function to combine two ALREADY SORTED arrays into one larger array.
function merge(array1, array2) {
   const merged = []
   while (array1.length !== 0 && array2.length !== 0) {
      if (array1[0] < array2[0]) {
         merged.push(array1.shift())
      } else {
         merged.push(array2.shift())
      }
   }
   return merged.concat(array1).concat(array2)
}

