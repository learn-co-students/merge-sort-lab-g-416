function findMinAndRemoveSorted(array) {
    let min = array[0];
    array.splice(0, 1);
    return min;
}

function merge(arr1, arr2) {
    let sorted = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            let min1 = findMinAndRemoveSorted(arr1);
            sorted.push(min1);
        } else {
            let min2 = findMinAndRemoveSorted(arr2);
            sorted.push(min2);
        }
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    let mid = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(arr1), mergeSort(arr2))
    }
}