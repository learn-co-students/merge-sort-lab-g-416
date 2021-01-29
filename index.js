function findMinAndRemoveSorted(array) {
    let min=array[0]
    let index = 0
    for (let i = 1; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            index = i
        }
    }
    array.splice(index, 1)
    return min
}

function merge(arrOne, arrTwo) {
    let sorted = []
    while (arrOne.length !=0 && arrTwo.length !=0) {
        if (arrOne[0] < arrTwo[0]) {
            sorted.push(arrOne[0])
            arrOne.splice(0, 1)
        } else {
            sorted.push(arrTwo[0])
            arrTwo.splice(0,1)
        }
    }

    return sorted.concat(arrOne, arrTwo)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let lastHalf = array.slice(midpoint, array.length)
    console.log("FirstH=",firstHalf," secondH=", lastHalf)
    if (array.length < 2 ) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(lastHalf))
    }
}