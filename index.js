function findMinAndRemoveSorted(array) {
  let i = 0;

  for (i = 0; i < array.length; i++) {
    let min = array[0]
    let idx = 0

    if (array[i] < min ) {
      min = array[i];
      idx = i
    }

    array.splice(idx, 1);
    return min;
  }
}

function merge(arrOne, arrTwo) {

  function findMinofTwo(arrOne, arrTwo) {
    let minOne = arrOne[0];
    let minTwo = arrTwo[0];

    if (minOne < minTwo) {
      return arrOne.shift();
    } else {
      return arrTwo.shift();
    }
  }

  let sorted = [];
  let currentMin;

  while (arrOne.length != 0 && arrTwo.length != 0){
    let currentMin = findMinofTwo(arrOne, arrTwo);
    sorted.push(currentMin);
  }

  return sorted.concat(arrOne).concat(arrTwo);
}

function mergeSort(array) {
  let middle = array.length / 2;
  let halfOne = array.slice(0, middle);
  let halfTwo = array.slice(middle, array.length);

  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(halfOne), mergeSort(halfTwo));
  }

}
