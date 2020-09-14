function findMinAndRemoveSorted(array) {
  let min = array[0]
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function merge(array1, array2) {
  // empty collection array
  let collection = []
  // repeat as long as neither array is empty
  while(array1.length != 0 && array2.length != 0) {
    // compare first of each array and push lesser to empty
    // remove lesser from that array
    if (array1[0] < array2[0]) {
      collection.push(array1.shift())
    } else {
      collection.push(array2.shift())
    }
  }
  // concat arrays to collection once one is empty and return
  return collection.concat(array1).concat(array2)
}

function mergeSort(array) {
  // split array
  let middleIndex = array.length / 2
  let firstHalf = array.slice(0, middleIndex)
  let secondHalf = array.slice(middleIndex)
  // if array length is 1 return array else recurse
  if (array.length < 2) {
    return array
  } else {
    // merge recursive splits 
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}