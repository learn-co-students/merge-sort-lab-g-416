
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstSortedSubArray, secondSortedSubArray) {
  let sorted = [];
  while (firstSortedSubArray.length !== 0 &&
         secondSortedSubArray.length !== 0) {
         if (firstSortedSubArray[0] < secondSortedSubArray[0]) {
           sorted.push(findMinAndRemoveSorted(firstSortedSubArray));
         }  else {
           sorted.push(findMinAndRemoveSorted(secondSortedSubArray));
         }
  }
  return sorted.concat(firstSortedSubArray).concat(secondSortedSubArray);
}


function mergeSort(array) {
  let middle = array.length / 2;
  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle, array.length);
  
  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}







