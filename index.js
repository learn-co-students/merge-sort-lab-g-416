function merge(firstArr, secondArr){
    const sorted = []
    while(firstArr.length != 0 && secondArr.length != 0){
        if(firstArr[0] < secondArr[0]){
            sorted.push(firstArr.shift())
        } else {
            sorted.push(secondArr.shift())
        }
    }
    return sorted.concat(firstArr).concat(secondArr)
}

function findMinAndRemoveSorted(arr){
    let min = arr[0]
    let minIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
    }
    arr.splice(minIndex, 1);
    return min;
}

function mergeSort(arr){
    const midPoint = arr.length / 2
    if(arr.length < 2){
        return arr
    } else {
        return merge(mergeSort(arr.slice(0, midPoint)), mergeSort(arr.slice(midPoint, arr.length)))
    }
}
