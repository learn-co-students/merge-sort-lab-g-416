function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstArray, secondArray) {
  let sorted = []

  while (firstArray.length != 0 && secondArray.length != 0 ) {
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondArray))
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(unsortedArray) {
  let midPoint = unsortedArray.length/2
  let firstHalf = unsortedArray.slice(0, midPoint)
  let secondHalf = unsortedArray.slice(midPoint, unsortedArray.length)

  if (unsortedArray.length < 2) {
    return unsortedArray
  }

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
