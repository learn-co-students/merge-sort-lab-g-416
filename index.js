function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  let merged = [];
  while(arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(findMinAndRemoveSorted(arr1))
    } else {
      merged.push(findMinAndRemoveSorted(arr2))
    }
  }
  return merged.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
  let mid = arr.length / 2;
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid, arr.length);
  let sorted;

  if(arr.length < 2) {
    return arr
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
