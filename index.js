function findMinAndRemoveSorted(firstHalf, secondHalf){
    let minFirstHalf = firstHalf[0];
    let minSecondHalf = secondHalf[0];
    if (minFistHalf < minSecondHalf){
        return firstHalf.shift()
    } else {
        return secondHalf.shift()
    }
}

function mergeSort(firstHalf, secondHalf){
    let sorted = []
    while (firstHalf.lenght != 0 && secondHalf.length !=0){
        let currentMin = findMinAndRemoveSorted(firstHalf,secondHalf)
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}