let swaps = 0

function selectionSort(arr) {
  let isSorted;
  let place = 0;
  while (place < arr.length - 1) {
    isSorted = true
    let min = place
    for (let i = place; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        isSorted = false
        min = i
      }
    }
    if (place !== min) swap(arr, place, min);
    place++
  }
  console.log(swaps)
  return arr
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
  swaps++
}

selectionSort([5,9,1,11,20,0])
selectionSort([0,9,1,11,20,21])
selectionSort([1,2,3,4,5,6])
