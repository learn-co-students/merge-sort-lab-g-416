// let array1 = [ 3, 6, 8, 11]

function findMinAndRemoveSorted(array) {
    let min = Math.min(...array)
    let indexOfMin = array.indexOf(min)
    return parseInt(array.splice(indexOfMin, 1))
}

// console.log(findMinAndRemoveSorted(array1))

// let firstHalf = [1,7,9]
// let secondHalf = [4,5,6]

function merge(firstHalf, secondHalf) {
    let sorted = []

    while (firstHalf.length != 0 && secondHalf.length != 0) {
        firstHalf[0] < secondHalf[0] ? sorted.push(findMinAndRemoveSorted(firstHalf)) : sorted.push(findMinAndRemoveSorted(secondHalf));
    }
    return sorted.concat(firstHalf).concat(secondHalf);
    // Reason why first and second halves need to be concatenated is because you don't know which array will have left over elements.

}

function mergeSort (array) {
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;

    if (array.length < 2) {
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}   
