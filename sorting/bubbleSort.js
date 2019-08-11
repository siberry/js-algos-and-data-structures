let swaps = 0

function bubbleSort(arr) {
  let isSorted;
  let passes = 0;
  while (!isSorted) {
     isSorted = true
     for (let i = 0; i < arr.length - passes; i++) {
       if (arr[i] > arr[i+1]) {
         swap(arr, i, i+1)
         isSorted = false
       }
     }
     passes++
  }
  console.log(swaps)
  return arr
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
  swaps++
}

bubbleSort([5,9,1,11,20,0])
bubbleSort([0,9,1,11,20,21])
bubbleSort([1,2,3,4,5,6])
