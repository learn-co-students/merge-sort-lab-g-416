
function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
}

function merge(arrayOne, arrayTwo) {
    let sorted = [];
    while (arrayOne.length > 0 && arrayTwo.length > 0) {
        if (arrayOne[0] < arrayTwo[0]) {
            sorted.push(arrayOne[0]);
            arrayOne.splice(0, 1);
        } else {
            sorted.push(arrayTwo[0]);
            arrayTwo.splice(0, 1);
        }
    }
    return sorted.concat(arrayOne).concat(arrayTwo);
}

function mergeSort(array) {
    let midPoint = array.length / 2;
    let first = array.slice(0, midPoint);
    let second = array.slice(midPoint, array.length);

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(first), mergeSort(second))
    }
}