function findMinAndRemoveSorted(array) {
  let min = 100000000;
  let minIndex;
  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}
