function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstArray, secondArray) {
    let newArray = [];

    while (firstArray.length != [0] && secondArray.length != [0]) {
        if(firstArray[0] < secondArray[0]) {
            newArray.push(findMinAndRemoveSorted(firstArray))
        } else {
            newArray.push(findMinAndRemoveSorted(secondArray))
        }
    }
    return newArray.concat(firstArray).concat(secondArray)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let newArray
 
    if(array.length < 2){
      return array
    } else {
      newArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return newArray
}
