function findMinAndRemoveSorted(a) {
    return a.shift()
}

function merge(first, second) {
  let sorted = [];
  let min;
  while (first.length != 0 && second.length != 0) {
    if (first[0] < second[0]) {
      min = findMinAndRemoveSorted(first);
      sorted.push(min);
    } else {
      min = findMinAndRemoveSorted(second);
      sorted.push(min);
    }
  }
  return sorted.concat(first).concat(second);
}

function mergeSort(a) {
  let middle = a.length / 2;
  let first = a.slice(0, middle);
  let second = a.slice(middle, a.length);
  let value;

  if (a.length < 2) {
    return a;
  } else {
    value = merge(mergeSort(first), mergeSort(second));
  }
  return value;
}
