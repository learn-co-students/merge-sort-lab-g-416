function findMinAndRemoveSorted(sortedArray) {
  return sortedArray.shift();
}

function merge(array1, array2) {
  let sortedArray = [];
  while (array1.length != 0 && array2.length != 0) {
    if (array1[0] < array2[0]) {
      sortedArray.push(findMinAndRemoveSorted(array1));
    } else {
      sortedArray.push(findMinAndRemoveSorted(array2));
    }
  }
  return sortedArray.concat(array1).concat(array2);
}

function mergeSort(unsortedArray) {
  let midpoint = unsortedArray.length / 2;
  let firstHalfArray = unsortedArray.slice(0, midpoint);
  let secondHalfArray = unsortedArray.slice(midpoint, unsortedArray.length);

  let sorted;

  if (unsortedArray.length < 2) {
    return unsortedArray;
  } else {
    sorted = merge(mergeSort(firstHalfArray), mergeSort(secondHalfArray));
  }
  return sorted;
}
