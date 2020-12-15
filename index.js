
function findMinAndRemoveSorted(array) {
    // let min = array[0]
    // let minElementIndex = 0
    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] < min) {
    //         min = array[i]
    //         minElementIndex = i
    //     }
    // }
    // array.splice(minElementIndex, 1)
    // return min
    return array.shift()
}

function merge(firstHalfArray, secondHalfArray) {
    let sorted = []

    while(firstHalfArray != 0 && secondHalfArray != 0) {
        if (firstHalfArray[0] < secondHalfArray[0]) {
            sorted.push(findMinAndRemoveSorted(firstHalfArray))
        } else {
            sorted.push(findMinAndRemoveSorted(secondHalfArray))
        }
    }
    return sorted.concat(firstHalfArray).concat(secondHalfArray)

}

function mergeSort(unsortedArray) {
    let med = unsortedArray.length / 2
    let firstHalfArray = unsortedArray.slice(0, med)
    let secondHalfArray = unsortedArray.slice(med, unsortedArray.length)
    if (unsortedArray.length < 2) {
        return unsortedArray
    } else {
        return merge(mergeSort(firstHalfArray), mergeSort(secondHalfArray))
    }   
}