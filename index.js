function findMinAndRemoveSorted(array){
    let min = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
      let currentElement = array[i]
      if(array[i] < min){
        min = array[i]
        minIndex = i
      }
    }
    array.splice(minIndex, 1);
    return min;
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemoveSorted(array)
      sorted.push(newMin)
    }
    return sorted;
}

function merge(firstHalf, secondHalf){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < firstHalf.length && j < secondHalf.length){
        if(secondHalf[j] > firstHalf[i]){
            results.push(firstHalf[i]);
            i++;
        } else {
            results.push(secondHalf[j])
            j++;
        }
    }
    while(i < firstHalf.length) {
        results.push(firstHalf[i])
        i++;
    }
    while(j < secondHalf.length) {
        results.push(secondHalf[j])
        j++;
    }
    return results;
}

function mergeSort(array){
    if(array.length <= 1) return array;
    let midpoint = Math.floor(array.length/2);
    let firstHalf = mergeSort(array.slice(0, midpoint));
    let secondHalf = mergeSort(array.slice(midpoint));
    return merge(firstHalf, secondHalf);
}