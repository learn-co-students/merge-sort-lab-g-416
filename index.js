
/* ex: 
   let firstSubarray = [3, 4, 6, 7]
   let secondSubArray = [1, 2, 5, 8]
*/

// find and remove smallest value in a sorted array

function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  
  for (const value of array) {
    if (value < min) {
      min = value;
      minIndex = array.indexOf(value);
    }
  }
  array.splice(minIndex, 1);
  return min;
}

// implement merge to combine two sub arrays
function merge(firstSubArray, secondSubArray) {
  let sorted = [];
  let min;
  while (firstSubArray.length !== 0 || secondSubArray.length !== 0) {
     
     let firstmin = findMinAndRemoveSorted(firstSubArray);
     let secondmin = findMinAndRemoveSorted(secondSubArray);
     
     if (firstmin < secondmin) {
       min = firstmin;
       sorted.push(min, secondmin)
     } else {
       min = secondmin;
     }

  }
  // concat result of values left in arrays
  return sorted.concat(firstSubArray).concat(secondSubArray);
}












