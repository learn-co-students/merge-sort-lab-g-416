const findMinAndRemoveSorted = (arr) => {
  return arr.shift();
};

// console.log(findMinAndRemoveSorted([2, 3, 4, 5, 6, 7]));

const findMinAndRemove = (arr1, arr2) => {
  let minArr1 = arr1[0];
  let minArr2 = arr2[0];

  if (minArr1 < minArr2) {
    return arr1.shift();
  } else {
    return arr2.shift();
  }
};

// console.log(findMinAndRemove([1, 2, 6, 7, 8], [3, 4, 5, 9, 10]));

const merge = (arr1, arr2) => {
  let sorted = [];
  while (arr1.length != 0 && arr2.length != 0) {
    let curMin = findMinAndRemove(arr1, arr2);
    sorted.push(curMin);
  }
  return sorted.concat(arr1).concat(arr2);
};

// console.log(merge([3, 4, 6, 7], [1, 2, 5, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]

const mergeSort = (arr) => {
  let midpoint = arr.length / 2;
  let arr1 = arr.slice(0, midpoint);
  let arr2 = arr.slice(midpoint, arr.length);

  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(arr1), mergeSort(arr2));
  }
};

// console.log(mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]));
