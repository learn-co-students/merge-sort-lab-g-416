function findMinAndRemoveSorted(array) {
    if (!!array) {
        let smallest = array[0]
        let index = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] < smallest) {
                smallest = array[i]
                index = i 
            }
        }

        return array.splice(index, 1)[0]
    } else {
        return false
    }
}

function merge(array1=[], array2=[]) {
    let newArray = []

    while (array1.length > 0 && array2.length > 0) {
        
        let low1 = findMinAndRemoveSorted(array1)
        let low2 = findMinAndRemoveSorted(array2)
        
        if (low1 < low2) {
            newArray.push(low1)
            array1.push(low2)
        } else {
            newArray.push(low2)
            array1.push(low1)
        }
    }

    if(array1.length > 0) {
        while (array1.length > 0) {
            newArray.push(findMinAndRemoveSorted(array1))
        }
    }
    if (array2.length > 0) {
        while (array2.length > 0) {
            newArray.push(findMinAndRemoveSorted(array2))
        }
    }
    return newArray 
}

function mergeSort(array1, array2) {
    if (!!array1 && !!array2) {
        return merge(array1, array2)
    } else if (!!array1 && !array2) {
        return merge(array1)
    } else if (!array1 && !!array2) {
        return merge(array2)
    }
    
}
