
function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arrFirst, arrSecond) {
    let sortedArr = []
    while (arrFirst.length > 0 && arrSecond.length > 0) {
        if (arrFirst[0] < arrSecond[0]) {
            sortedArr.push(findMinAndRemoveSorted(arrFirst))
        } else {
            sortedArr.push(findMinAndRemoveSorted(arrSecond))
        }
    }
    return sortedArr.concat(arrFirst).concat(arrSecond)
}

function mergeSort(arr) {
    let midpoint = arr.length/2
    let firstPartArr = arr.slice(0,midpoint)
    let secondPartArr = arr.slice(midpoint, arr.length)
    if (arr.length >= 2) {
        return merge(mergeSort(firstPartArr), mergeSort(secondPartArr))
    } else {
        return arr
    }
}