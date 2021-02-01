function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(leftArray, rightArray) {
  const sorted = [];

  while (leftArray.length !== 0 && rightArray.length !== 0) {
    if (leftArray[0] < rightArray[0]) {
      sorted.push(leftArray[0]);
      leftArray = leftArray.slice(1)
    } else {
      sorted.push(rightArray[0]);
      rightArray = rightArray.slice(1)
    }
  }

  return sorted.concat(leftArray).concat(rightArray)
}

function mergeSort(array) {
  const midpoint = array.length / 2
  const leftHalf = array.slice(0, midpoint)
  const rightHalf = array.slice(midpoint, array.length)

  if (array.length === 1) {
    return array;
  } else {
    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
  }
}
