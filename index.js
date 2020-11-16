function findMinAndRemoveSorted(array) {
    return array.shift()
  }
  
  function removeMinFromTwoSorted(firstHalf, secondHalf) {
    if(firstHalf[0] < secondHalf[0]) {
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
  }
  
  function merge(firstHalf, secondHalf) {
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0) {
      sorted.push(removeMinFromTwoSorted(firstHalf, secondHalf))
    }
    return [...sorted, ...firstHalf, ...secondHalf]
  }
  
  function mergeSort(array) {
    if(array.length == 1) {
      return array
    } else {
      let half = array.length / 2
      let firstHalf = array.slice(0, half)
      let secondHalf = array.slice(half)
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }