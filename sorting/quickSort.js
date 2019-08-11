const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function quickSort(arr, left = 0, right = arr.length -1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right) // left and right change; arr does not
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

console.log(quickSort([5,1,2,10,4,11]))
console.log(quickSort([7,25,10,6,3,1,100,-4,-7,0,7]))

function pivot(arr, start=0, end=arr.length-1) { //will mutate arr and will return newIndexOfPivot
  let swapIdx = start
  let pivot = arr[start]
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++
      swap(arr,swapIdx,i)
    }
  }
  swap(arr,swapIdx,start)
  // console.log(arr)
  // console.log(swapIdx);
  return swapIdx
}

// pivot([5,1,2,10,4,11]); // arr =~ [1,2,4,5,10,11] and return 3
// pivot([7,25,10,6,3,1,100,-4,-7,0,7])
// pivot([2,3])
// pivot([3,2])
// pivot([3])
// pivot([1,3,2])
