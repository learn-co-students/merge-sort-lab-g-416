
function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] < min) {
            min  = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
}

// function findMinAndRemoveSorted(array1, array2){
//     let minArray1 = array1[0];
//     let minArray2 = array2[0];
//     if (minArray1 < minArray2) {
//       return array1.shift();
//     } else {
//       return array2.shift();
//     }
//   }

function merge(array1, array2) {
    let sortedArray = [];
    while(array1.length !=0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            sortedArray.push(array1.shift())
        } else {
            sortedArray.push(array2.shift())
        }
        // sortedArray.push(min);
    }
    console.log(`sorted array is ${sortedArray} array1 is ${array1} array2 is ${array2}`);
    return sortedArray.concat(array1).concat(array2);
}

function mergeSort(array) {
    let middle = array.length/2;
    if (array.length < 2) {
        return array;
    } else {
        console.log(`array is ${array}`)
        return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)))
    }
}