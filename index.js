
function findMinAndRemoveSorted(array){
    let minVal = array[0]
    let index
    for(let i = 0; i < array.length; i++){
        if(minVal > array[i]){
            minVal = array[i]
            index = i
        }
    }
    array.splice(index, 1)
    return minVal
}

function merge(array1, array2){
    let sorted = []
    while(array1.length !== 0 && array2.length !== 0){
        if(array1[0] < array2[0]){
            sorted.push(array1.shift())
        } else {
            sorted.push(array2.shift())
        }
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if(array.length < 2){
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}