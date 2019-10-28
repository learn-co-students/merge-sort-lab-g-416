import { threadId } from "worker_threads";

function findMinAndRemoveSorted(theArray){
    let min = theArray[0]
    theArray.shift()
      return min

    // let minFirst = firstArray[0];
    // let minSecond = secondArray[0]
    // if(minFirst > minSecond){
    //     firstArray.shift()
    //     return minFirst;
    // }else{
    //     secondArray.shift()
    //     return minSecond;
    // }
}
function merge(first, second){
        let sorted= []
        let currentMin ;
       
        while(first.length != 0 && second.length != 0){
            let minFirst = first[0];
            let minSecond = second[0];
            if(minFirst < minSecond){
                first.shift()
                currentMin = minFirst
            }else{
                second.shift()
                currentMin = minSecond
            }
            sorted.push(currentMin)
        }
        return sorted.concat(first).concat(second)
}


function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
 if (array.length < 2){
     return array
 }else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
 }
}
  