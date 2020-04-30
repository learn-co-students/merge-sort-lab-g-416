function findMinAndRemoveSorted(array) {
    return array.shift()
}

function findMinAndRemove(array1, array2) {
    if (array1[0] < array2[0]) {
        return array1.shift()
    } else {
        return array2.shift()
    }
}

function merge(array1, array2) {
    let sortedArray = []

    while (array1.length != 0 && array2.length != 0) {
        let min = findMinAndRemove(array1, array2)
        sortedArray.push(min)
    }
    return sortedArray.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let array1 = array.slice(0, midpoint)
    let array2 = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(array1), mergeSort(array2))
    }
}