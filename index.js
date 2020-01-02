// Implement a function that first finds and removes the smallest element in a sorted array. DONE
// Implement the merge function to combine two sorted arrays into one larger array. DONE
// Implement the mergeSort algorithm using the previous functions that you wrote.

function findMinAndRemoveSorted(arr) {
    return arr.shift();
}

function merge(arr1, arr2) {
    let merged = [];
    while(arr1.length != 0 && arr2.length != 0) {
        if (arr1[0] < arr2[0]) {
            merged.push(arr1[0]);
            arr1.shift();
        } else {
            merged.push(arr2[0]);
            arr2.shift();
        }
    }
    return merged.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    let midpoint = arr.length / 2;
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint, arr.length);
    let sorted;

    if (arr.length < 2) {
        return arr;
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }

    return sorted;
}