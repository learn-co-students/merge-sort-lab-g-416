function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(firstHalfArray, secondHalfArray) {
  let sorted = []

  while (firstHalfArray.length != 0 && secondHalfArray != 0) {
    if (firstHalfArray[0] < secondHalfArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstHalfArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondHalfArray))
    }
  }

  return sorted.concat(firstHalfArray).concat(secondHalfArray)
}

function mergeSort(arr) {
  let midpoint = arr.length / 2
  let firstHalfArray = arr.slice(0, midpoint)
  let secondHalfArray = arr.slice(midpoint, arr.length)

  if (arr.length < 2){

    return arr
  } else {

    return merge(mergeSort(firstHalfArray), mergeSort(secondHalfArray))
  }
}
