function findMinAndRemoveSorted(arr1, arr2 = [10e18]) {
    let min1 = arr1[0];
    let min2 = arr2[0];
    if (min1 < min2) {
        return arr1.shift();
    } else {
        return arr2.shift();
    };
};

function merge(arr1, arr2) {
    let sorted = [];
    let currentMin;
    while (arr1.length + arr2.length != 0) {
        let currentMin = findMinAndRemoveSorted(arr1, arr2);
        sorted.push(currentMin);
        console.log(sorted)
    }
    return sorted;
}

function mergeSort(arr) {
    let midpoint = arr.length / 2;
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint, arr.length);

    if (arr.length > 2) {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    } else {
        return arr;
    }
}