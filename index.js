
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstSubArray, secondSubArray) {
  let sorted = []
  while (firstSubArray.length != 0 && secondSubArray.length != 0) {
    if (firstSubArray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}