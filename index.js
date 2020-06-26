function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
}

function merge(firstArray, secondArray) {
    let sorted = [];
    let min;
    while (firstArray.length != 0 && secondArray.length != 0) {
        if (firstArray[0] < secondArray[0]) {
            min = findMinAndRemoveSorted(firstArray);
            sorted.push(min);
        } else {
            min = findMinAndRemoveSorted(secondArray);
            sorted.push(min);
        }
    }
    return sorted.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
  
    if (array.length < 2) {
      return array;
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }