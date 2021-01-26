function findMinAndRemoveSorted(array) {
    let min = array[0]
    let minIndex = 0
    for (let i = 0; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function merge(array1, array2) {
    let result = []
    while (array1.length !== 0 && array2.length !== 0) {
        if (array1[0] < array2[0]) {
            result.push(findMinAndRemoveSorted(array1)) 
        }
        else  {
            result.push(findMinAndRemoveSorted(array2))
        }
    }
    return result.concat(array1).concat(array2)
}

function mergeSort(array) {
    let result = []
    while (array.length > 0) {
        let newMin = findMinAndRemoveSorted(array)
        result.push(newMin)
    }
    return result
}