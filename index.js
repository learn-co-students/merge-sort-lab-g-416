
function findMinAndRemoveSorted(array) { 
    return array.shift()
}

function merge(arrayOne, arrayTwo) { 
    let sorted = []
    while ( arrayOne.length != 0 && arrayTwo.length != 0 ){ 
        let currentMin
        if (arrayOne[0] < arrayTwo[0]) { 
            currentMin = arrayOne[0] 
            findMinAndRemoveSorted(arrayOne)    
        } else { 
            currentMin = arrayTwo[0] 
            findMinAndRemoveSorted(arrayTwo)   
        }
        sorted.push(currentMin)
    }
    return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array) { 
    let midPoint = array.length/2 
    let arrayOne = array.slice(0, midPoint)
    let arrayTwo = array.slice(midPoint, array.length)
    if (array.length < 2) { 
        return array
    } else 

    return merge(mergeSort(arrayOne), mergeSort(arrayTwo))
}