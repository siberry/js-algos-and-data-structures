function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let inspect = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > inspect; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = inspect
  }
  console.log(arr);
  return arr;
}

insertionSort([5,9,1,11,20,0])
insertionSort([0,9,1,11,20,21])
insertionSort([1,6,5,4,3,2])
