function findMinAndRemoveSorted(array){
    let min = array[0]
    let minIdx = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1)
    return min
}

function merge(firstArr, secondArr){
    let sorted = []
    let min;
    let combined = firstArr.concat(secondArr)
    while (combined != 0){
        let min = findMinAndRemoveSorted(combined)
        sorted.push(min)
    }
    return sorted
}
//[12, 10, 9, 14, 1, 3, 5, 11, [6, 15, 16, 13, 2, 4, 8, 7]
function mergeSort(array){
    let mid = array.length/2
    let firstHalf = array.slice(0, mid) //[12, 10, 9, 14, 1, 3, 5, 11]
    let secHalf = array.slice(mid, array.length)//[6, 15, 16, 13, 2, 4, 8, 7]

    return merge(firstHalf, secHalf)
}
