function findMinAndRemoveSorted(array){
   return array.shift()
}

function merge(a1,a2){
   let sorted = []
   while (a1.length != 0 && a2.length != 0){
      if (a1[0] < a2[0]){
         sorted.push(findMinAndRemoveSorted(a1))
      } else {
         sorted.push(findMinAndRemoveSorted(a2))
      }
   }
   return sorted.concat(a1).concat(a2)
}

function mergeSort(array){
   let mid = array.length/2
   let half1 = array.slice(0,mid)
   let half2 = array.slice(mid, array.length)
   let sorted;

   if (array.length < 2){
      return array
   } else {
      sorted = merge(mergeSort(half1), mergeSort(half2)) 
   }

   return sorted
}