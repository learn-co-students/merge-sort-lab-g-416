function findMinAndRemoveSorted (arr) {
    return arr.shift()
}

function merge (firstArr, secondArr) {
    let sortedArray = []

    while (firstArr.length !== 0 && secondArr.length !== 0) {
        if (firstArr[0] < secondArr[0]) {
            sortedArray.push(findMinAndRemoveSorted(firstArr))
        } else {
            sortedArray.push(findMinAndRemoveSorted(secondArr))
        }
    }
    return sortedArray.concat(firstArr).concat(secondArr)
}

function mergeSort (arr) {

    let mid = arr.length/2
    let firstArr = arr.slice(0, mid)
    let secondArr = arr.slice(mid, arr.length)

    if (arr.length < 2) {
        return arr
    } else {
        return merge(mergeSort(firstArr), mergeSort(secondArr))
    }
}