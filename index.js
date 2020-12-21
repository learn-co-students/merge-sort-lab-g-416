
function findMinAndRemoveSorted(array){
    let min = array[0]
    let idx = 0
    for (let i = 0; i < array.length; i++ ){
        if (array[i] < min) {
            min = array[i]
            idx = i
        }
    }

    array.splice(idx, 1)
    return min
}

function findMinAndRemove(firstHalf, secondHalf){
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if(minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
  }

function merge(array1, array2) {
    let sorted = []
    let currentMin;

    while(array1.length !== 0 && array2.length !== 0 ) {
        currentMin = findMinAndRemove(array1, array2)
        sorted.push(currentMin)
    }

    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
 
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}