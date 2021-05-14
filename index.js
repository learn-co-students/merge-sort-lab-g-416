function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr1, arr2) {
    let sorted = []
    while (arr1 != 0 && arr2 != 0) {
        if (arr1[0] < arr2[0]) {
            sorted.push(findMinAndRemoveSorted(arr1))
        } else {
            sorted.push(findMinAndRemoveSorted(arr2))
        }
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    let midpoint = arr.length / 2
    let arr1 = arr.slice(0, midpoint)
    let arr2 = arr.slice(midpoint, arr.length)
    let sorted;

    if (arr.length < 2) {
        return arr
    } else {
        sorted = merge(mergeSort(arr1), mergeSort(arr2))
    }
    return sorted
}