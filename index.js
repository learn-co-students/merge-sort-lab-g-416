function findMinAndRemoveSorted(array) {
    let min = array[0]
    for(let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    array.splice(array.indexOf(min), 1)
    return min 
}

function merge(array1, array2) {
    let newArray = []
    while(array1.length != 0 && array2.length != 0) {
       let array1Min = array1[0]
       let array2Min = array2[0]
       if (array1Min < array2Min) {
           newArray.push(array1Min)
           array1.splice(array1.indexOf(array1Min), 1)
       } else {
           newArray.push(array2Min)
           array2.splice(array2.indexOf(array2Min), 1)
       }
    }
    let merged = newArray.concat(array1).concat(array2)
    return merged 
}

function mergeSort(array) {
    let firstHalf = array.slice(0, (array.length / 2))
    let secondHalf = array.slice((array.length / 2), array.length)
    let sorted 
    if (array.length < 2) {
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted 
}