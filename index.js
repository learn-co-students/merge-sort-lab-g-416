function findMinAndRemoveSorted(array){
  //return array.splice(0,1)
  return array.shift();
}

function merge(firstSubArray, secondSubArray){
  let sorted = [];
  while(firstSubArray.length !== 0 && secondSubArray.length !== 0){
    if(firstSubArray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubArray));
      //merge(firstSubArray, secondSubArray)
    } else if(secondSubArray[0] < firstSubArray[0]){
      sorted.push(findMinAndRemoveSorted(secondSubArray));
      //merge(firstSubArray, secondSubArray)
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array){
    let firstHalf = array.slice( 0, array.length/2);
    let secondHalf = array.slice(array.length/2);
    if(array.length > 1){
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }else{
      return array
    }
}