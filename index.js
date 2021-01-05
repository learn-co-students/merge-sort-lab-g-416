function findMinAndRemoveSorted(array) {
  let min = array[0], minI
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min){
      minI = i
      min = array[i]
    }
  }
  array.splice(minI,1)
  return min
}

function merge(array1, array2){
  let sorted = []
  while (array1.length !== 0 && array2 !==0) {
    if (array1[0] < array2[0]) {
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  let sorted = []
  while (array.length !== 0) {
    sorted.push(findMinAndRemoveSorted(array))
  }
  return sorted
}
