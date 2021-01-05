// Implement a function that first finds and removes the smallest element in a sorted array
function findMinAndRemoveSorted(array) {
    return array.shift()
}

// Implement the merge function to combine two sorted arrays into one larger array
function merge(firstSubarray, secondSubArray) {
    let sorted = []
    while (firstSubarray.length != 0 && secondSubArray.length != 0) {
        if (firstSubarray[0] < secondSubArray[0]) {
            sorted.push(findMinAndRemoveSorted(firstSubarray))
        } else {
            sorted.push(findMinAndRemoveSorted(secondSubArray))
        }
    }
    return sorted.concat(firstSubarray).concat(secondSubArray)
}

// Implement the mergeSort algorithm using the previous functions that you wrote
function mergeSort(array) {
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted

    if (array.length < 2) {
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}