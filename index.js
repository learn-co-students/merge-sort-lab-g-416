function findMinAndRemoveSorted(array) {
   let min = array[0]
   let i = 0
   array.forEach((el, idx) => {
      if (el <= min) {
         min = el
         i = idx
      }
   })
   array.splice(i, 1)
   return min
}

// function merge(a1, a2) {
//    let merged = [], i = 0, j = 0
//    let e1 = findMinAndRemoveSorted(a1)
//    let e2 = findMinAndRemoveSorted(a2)
//    while (!(a1.length == 0 && a2.length == 0)) {
//       if (e1 < e2) {
//          merged.push(e1)
//          e1 = findMinAndRemoveSorted(a1)
//       } else {
//          merged.push(e2)
//          e2 = findMinAndRemoveSorted(a2)
//       }
//    }
//    console.log(a1, a2)
//    return merged.concat(a1).concat(a2)
// }

function merge(left, right) {
   let result = []
   let indexLeft = 0
   let indexRight = 0

   while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
         result.push(left[indexLeft])
         indexLeft++
      } else {
         result.push(right[indexRight])
         indexRight++
      }
   }

   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function mergeSort(array) {
   let midpoint = Math.floor(array.length / 2)
   let first = array.slice(0, midpoint)
   let second = array.slice(midpoint, array.length)
   if (array.length < 2) {
      return array
   }
   return merge(mergeSort(first), mergeSort(second))
}

